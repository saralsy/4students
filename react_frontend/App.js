import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Dimensions, Text ,View, StyleSheet , ScrollView, ImageBackground, TextInput, TouchableOpacity, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {width, height} = Dimensions.get('window');
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import StudyGroup from './components/StudyGroup'

const Stack = createStackNavigator();



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
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={SignUp}/>
        <Stack.Screen name="StudyGroup" component={StudyGroup}/>
      </Stack.Navigator>
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
