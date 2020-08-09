import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Dimensions, Text ,View, StyleSheet , ScrollView, ImageBackground, TextInput, TouchableOpacity, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {width, height} = Dimensions.get('window');
import SignUp from './SignUp';
import Login from './Login';
import About from './About';



export default class Home extends Component {
    
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
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button1} onPress={()=> this.props.navigation.navigate("About")} title='About'>
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button1} onPress={()=> this.props.navigation.navigate("Login")} title='Log In'>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2} onPress={()=> this.props.navigation.navigate("Signup")} title='Join'>
            <Text style={styles.buttonText}>Join</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3} onPress={()=> this.props.navigation.navigate("StudyGroup")} title='Note App'>
            <Text style={styles.buttonText}>Note App</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <Text style={styles.title1}>ENGAGE</Text>
          <Text style={styles.title2}>FOCUS</Text>
          <Text style={styles.title3}>CONNECT</Text>

          <StatusBar style="auto" />
        </View>

        <View>
          <ImageBackground source={require('../assets/stugru_logo_lowRes.png')} style={styles.logo} />
        </View>
        
      </ScrollView>
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
    paddingRight: 50,
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
    color:'#92C8BB',
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
    margin: 20,
    textAlign: 'center'
    

  },
  button2:{
    width: 100,
    fontSize:30,
    fontFamily: 'Avenir-Medium',
    fontColor:'#000000',
    backgroundColor:'#FFCA74',
    borderRadius:15,
    padding: 10,
    margin:20,
    textAlign: 'center'
  },
  button3:{
    fontSize:30,
    fontFamily: 'Avenir-Medium',
    fontColor:'#000000',
    
    textAlign: 'justify',
    width: 100,
    textAlign: 'center',
    alignItems: 'center',
    alignContents: 'center',
    paddingBottom:8,
    
    margin:20
  },

  logo:{
    width: 300,
    margin: 50,
  }
  // font that can be used: Avenir, Avenir Next, Avenir-Heavy, Avenir-Medium, Avenir-Light
});
