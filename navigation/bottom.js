import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import Home from '../screens/home';
import Crud from '../screens/crud';

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

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1
  },
});

