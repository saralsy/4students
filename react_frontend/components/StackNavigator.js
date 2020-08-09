import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './SignUp'
import Login from './Login'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign up" component={SignUp} options={{ title: 'Join Us' }}/>

        <Stack.Screen name="Log In" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};