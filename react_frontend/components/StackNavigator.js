import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { View, Text, Image } from 'react-native';

import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import About from './About'

const Stack = createStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: 180, height: 55 }}
        source={require('../assets/stugru_logo_lowRes.png')}
        onPress={()=> this.props.navigation.navigate("Home")}
      />
    );
  }

export function StackNavigator() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Landing Page' }}
        />
        <Stack.Screen
          name="About"
          component={About}
          initialParams={{ user: 'me' }}
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Log in"
          component={Login}
          initialParams={{ user: 'me' }}
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
          name="Join"
          component={SignUp}
          initialParams={{ user: 'me' }}
          options={{ headerTitle: props => <LogoTitle {...props} /> }}
        />

      </Stack.Navigator>
    );
  }

