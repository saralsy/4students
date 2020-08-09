import React from "react";
import {Platform, KeyboardAvoidingView, SafeAreaView} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import results from "./results";
import { render } from "react-dom";


export default class ChatRoom extends React.Component {
    state = {
        messages = []
    }

    get user() {
        //authenticate user from Firebase
        return {
            id: null,
            name: "FakeUser"
        };
    }

    componentDidMount() {
        //send message to Firebase
    }

    componentWillUnmount() {
        //leave page?
    }

    render() {
        <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>
            <View>
                <Text style={styles.title1}>Study Groups</Text>
             </View>

        </View>
        
        const chat = <GiftedChat messages={this.state.messages} onSend={/* need to send to Firebase */} user={this.user} />;

        return <SafeAreaView>style={{ flex: 1 }}</SafeAreaView>;
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
  
  