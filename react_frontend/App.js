import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Dimensions, Text ,View, StyleSheet , ScrollView, ImageBackground, TextInput, TouchableOpacity, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');


export default class App extends Component {

  state ={
    firstName:'',
    lastName:'',
    email: '',
    username: '',
    password: '',
    date: '',
  };
  submit=() => {
    const { firstName,lastName, username, email, password } = this.state;
    if(username == '' || firstName=='' || lastName==''){
      alert("All fields are required")
    } else {
      alert("You are registered")
    }
  }

  render(){
    return (
      <NavigationContainer>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button1} onPress={()=> this.props.navigation.navigate(LogIn)} title='Log In'>
            <Text>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={()=> this.props.navigation.navigate(Join)} title='Join'>
            <Text>Join</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3} onPress={()=> this.props.navigation.navigate(NoteApp)} title='Note App'>
            <Text>Note App</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <Text style={styles.title1}>ENGAGE</Text>
          <Text style={styles.title2}>FOCUS</Text>
          <Text style={styles.title3}>CONNECT</Text>
          
          <StatusBar style="auto" />
        </View>
        
      </ScrollView>
      </NavigationContainer>
    );

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF5',
    width,
    height,
    
  },
  header:{
    height: height*1/10, 
    flexDirection: 'row', 
    alignItems:'flex-end',
    justifyContent:'flex-end',
    paddingRight: 150,
    start:0,
  },
  title1:{
    paddingTop: 100,
    fontSize: 70,
    paddingLeft: 150,
    textAlign: "flex-start",
    color: '#F28482',
    fontFamily:'Avenir-Heavy',
    alignItems: 'flex-start',
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
    width: 100,
    fontSize:30,
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
