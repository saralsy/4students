import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TextInput, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            username:'',
            password:''
        };
    }
    handleFirstName(val){this.setState({firstName:val})}
    handleLastName(val){this.setState({lastName:val})}
    handleUsername(val){this.setState({username:val})}
    handlePassword(val){this.setState({password:val})}

    render(){
        return(
        <ScrollView style={styles.container}>
        
        
        <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>
          <Text style={styles.title1}>Join Us!</Text>
          <View style={{padding:20, flexDirection:'row'}}> 
            <TextInput
            onEndEditing={this.handleFirstName}
            value={this.state.firstName}
            placeholder="First Name"
            style={[styles.input,{width:285, marginRight:10}]}></TextInput>
            <TextInput
            onEndEditing={this.handleFirstName}
            value={this.state.firstName}
            placeholder="Last Name"
            style={[styles.input, {width: 285, marginLeft:10}]}></TextInput>

          </View>
          <View style={{padding:20}}>
          <TextInput
            onEndEditing={this.handleUsername}
            value={this.state.username}
            placeholder="Username"
            style={styles.input}></TextInput>
          </View>
          <View style={{padding:20}}>
          <TextInput
            onEndEditing={this.handlePassword}
            value={this.state.password}
            placeholder="Password"
            style={styles.input}></TextInput>
          </View>
          <TouchableOpacity style={styles.button2} onPress={()=> this.props.navigation.navigate("StudyGroup")} title='StudyGroup'>
            <Text>Join</Text>
          </TouchableOpacity>
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
      fontColor: '#A1A1A1'

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
  button1:{
    width: 84,
    fontSize:30,
    fontFamily: 'Avenir-Medium',
    fontColor:'#000000',
    padding: 10,
    

  },
  button2:{
    width: 150,
    fontSize: 80,
    fontFamily: 'Avenir-Medium',
    fontColor:'#000000',
    backgroundColor:'#FFCA74',
    borderRadius:15,
    padding: 20,
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

