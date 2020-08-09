import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'

const Stack = createStackNavigator();

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
          name="Log in"
          component={Login}
          initialParams={{ user: 'me' }}
        />
        <Stack.Screen
          name="Join"
          component={SignUp}
          initialParams={{ user: 'me' }}
        />

      </Stack.Navigator>
    );
  }

