import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Images from './../screens/Images';
import Signup from './../screens/signup';
import Signin from './../screens/signin';
import Login from './../screens/Login';
import Home from './../screens/home';
import Task from './../screens/task'
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/screenscontext';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function StackNav() {

const {userToken} = useContext(LoginContext)

  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName='signup'>
        {userToken !== null ? 
        (<><Stack.Screen name="home" component={Home} options={{ headerShown: false }}/></>):
        (<><Stack.Screen name="signup" component={Signup} options={{headerShown:false}}/></>)
        }
        <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="images" component={Images} options={{ headerShown: false }}/>
        <Stack.Screen name="task" component={Task} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

