import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Home from '../screens/home';
import Crud from '../screens/crud';
import Images from '../screens/Images';
import Task from '../screens/task';

const Tab = createBottomTabNavigator();

export default function Bottomnav() {

  return (
   <Tab.Navigator initialRouteName='landingpage'>

        <Tab.Screen name="mylistpage" component={Home} 
        options={{ headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: '#AFB2B1',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarIcon: ({focused}) =>
            <Feather name="home" size={25} color={focused? '#FFD130' : '#AFB2B1'}/>
         }} />

        <Tab.Screen name="profilepage" component={Crud} 
        options={{ headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: '#AFB2B1',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarIcon: ({focused}) =>
            <Feather name="grid" size={25} color={focused? '#FFD130' : '#AFB2B1'}/>
         }} 
         />

<Tab.Screen name="task" component={Task}
        options={{ headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: '#AFB2B1',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarIcon: ({focused}) =>
            <Feather name="shopping-cart" size={25} color={focused? '#FFD130' : '#AFB2B1'}/>
         }} 
         />

<Tab.Screen name="images" component={Images} 
        options={{ headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: '#AFB2B1',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarIcon: ({focused}) =>
            <Entypo name="images" size={25} color={focused? '#FFD130' : '#AFB2B1'}/>
         }} 
         />



    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1
  },
});

