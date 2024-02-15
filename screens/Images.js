import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View,Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo'; 
import ArrowIcon from 'react-native-vector-icons/MaterialCommunityIcons'; 

export default function Images() {
  return (
    <View style={{}}>
      <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
        <View>
          <IconButton
            icon={() => <ArrowIcon name="arrow-left-bold-box-outline" size={24} />} 
          />
        </View>
        <View>
          <Text>text to Image</Text>
        </View>
        <View>
          <IconButton
            icon={() => <Icon name="dots-three-vertical" size={24} />} 
          />
        </View>
      </View>
      <View style={{width:"100%", display:"flex", flexDirection:"row",justifyContent:"center", flexWrap: "wrap", gap:10, marginTop:20}}>
        <Image source={require('../assets/house1.jpeg')} style={{width:"45%",height:150, borderRadius:10}}/>
        <Image source={require('../assets/house2.jpeg')} style={{width:"45%",height:150, borderRadius:10}}/>
        <Image source={require('../assets/house3.jpeg')} style={{width:"45%",height:150, borderRadius:10}}/>
        <Image source={require('../assets/house4.jpeg')} style={{width:"45%",height:150, borderRadius:10}}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
