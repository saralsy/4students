import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View, Dimensions, ScrollView, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import Popup from "reactjs-popup";
import { FontAwesome } from '@expo/vector-icons';
import results from './results';

const {width, height} = Dimensions.get('window');

export default class StudyGroup extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            groupName:'',
            groupNumber:0,
            modalVisible: false,

        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    handleUsername(val){this.setState({username:val})}
    handlePassword(val){this.setState({password:val})}
    toggleModal = (visible) => {
        this.setState({modalVisible: visible});
    }

    postGroupHandler = (e) => {
        e.preventDefault();
        const Data = {
            groupName: this.state.groupName,
            groupNumber: 10,
        }
        results.post('/groups.json', Data).then(response => {
            alert("You have added successfully")
            this.props.navigation.navigate("Home")
        })
    }

    render(){
        
        return(
        <ScrollView style={styles.container}>
        
        
        <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>
          <View>
              <View style={{flexDirection: "row"}}>
                 <Text style={styles.title1}>Study Groups</Text>
                 <FontAwesome.Button name="plus" style={styles.button2} 
                    onPress={()=> this.toggleModal(true)}>
                    Add Group
                </FontAwesome.Button>

              </View>
            
            

            <Modal animationType = "slide" transparent = {false}
               visible = {false}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               <View styles={styles.centeredView}>
                <View style = {styles.modalView}>
                    <Text style = {styles.modalText}>Create a New Study Group</Text>
                    <TextInput
                        onChange={(e)=>this.setState({groupName:e.target.value})}
                        value={this.state.groupName}
                        placeholder="Enter a Group Name"
                        style={[styles.input,{width:285, marginRight:10}]}></TextInput>
                    <View style={{flexDirection:"row", justifyContent:'stretch', marginTop: 20}}>
                        <TouchableOpacity style={[styles.button2,{marginRight:20}]} onPress={()=> this.toggleModal(false),this.postGroupHandler}>
                            <Text style={styles.buttonText }>Create</Text>
                        </TouchableOpacity>

                        <TouchableHighlight style={styles.button1} onPress = {() => {
                            this.toggleModal(false)}}>
                            
                            <Text style = {styles.buttonText}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </View>
               </View>
               
            </Modal>

            

          </View>
        </View>
          
      </ScrollView>
    );

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF5',
   
    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: 'Avenir-Medium',
    fontSize: 30,
  },
  input:{
      flex:1,
      borderColor: '#F28482',
      borderRadius:15,
      borderWidth: 1,
      width: 600,
      height: 60,
      fontSize: 20,
      fontFamily: 'Avenir-Light',
      padding: 10,
      fontColor: '#A1A1A1',
      

  },
  header:{
    height: height*1/10, 
    flexDirection: 'row', 
    alignItems:'center',
    justifyContent:'center',
    paddingRight: 150,
    start:0,
  },
  title1:{
    
    paddingTop: 100,
    fontSize: 70,
    
    textAlign: "center",
    color: '#F28482',
    fontFamily:'Avenir-Heavy',
    alignItems: 'center',
    paddingBottom: 25,
  },
  title2:{
    fontSize: 70,
    paddingLeft: 150,
    textAlign: "flex-start",
    fontFamily:'Avenir-Heavy',
    color:' #92C8BB',
    paddingBottom: 25,
  },
  title3:{
    fontSize: 70,
    paddingLeft: 150,
    textAlign: "flex-start",
    fontFamily:'Avenir-Heavy',
    color: '#FFCA74'
  },
  buttonText:{
    fontSize:20,
    fontFamily: 'Avenir-Medium',
    textAlign:'flex-end'
  },
  button1:{
    width: 84,
    fontSize:30,
    fontFamily: 'Avenir-Medium',
    fontColor:'#000000',
    padding: 10,
    

  },
  button2:{
    width: 100,
    fontSize: 50,
    fontFamily: 'Avenir-Medium',
    fontColor:'#000000',
    backgroundColor:'#FFCA74',
    borderRadius:15,
    padding: 10,
    textAlign: 'center'
  },
  button3:{
    fontSize:30,
    fontFamily: 'Avenir-Medium',
    fontColor:'#000000',
    padding: 10,
    textAlign: 'center',
    width: 100,

  }
  // font that can be used: Avenir, Avenir Next, Avenir-Heavy, Avenir-Medium, Avenir-Light
});

