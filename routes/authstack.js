import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/login';
import { SignUp } from '../screens/signup';
import { Welcome } from '../screens/welcome';

export function AuthStack(){

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="welcome" component={ Welcome } options={{headerShown:false, gestureDirection:"horizontal"}}/>
            <Stack.Screen name="login" component={ Login } options={{headerShown:false, gestureDirection:"horizontal"}}/>
            <Stack.Screen name="signup" component={ SignUp } options={{headerShown:false, gestureDirection:"horizontal"}}/>
        </Stack.Navigator>
    );
}