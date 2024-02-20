import React from 'react';
import {Text, View,Image,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Signin({navigation}) {
  return (
    <View>
          <View style={{ display:"flex", flexDirection:"row",justifyContent:"center", marginTop:20}}>
        <Image source={require('../assets/register.png')} style={{width:"50%"}}/>
      </View>
      <View style={{}}>
      <Text style={{fontSize:20, textAlign:"center", fontWeight:"bold", marginVertical:30}}>Register</Text>
     </View>
     <View style={{marginHorizontal:20}}>
     <TextInput 
     theme={{ roundness: 50}}
     underlineColor='white'
     style={{ borderRadius: 50,color:"#C2C2CB",fontWeight:"bold",marginBottom:15,backgroundColor:"white"}} 
        mode="flat"
        label="username"
        left={<TextInput.Icon size={20} icon={"account-outline"} color={'#F6C079'} style={{backgroundColor:"#FAEBE3"}}></TextInput.Icon>}
        />
         <TextInput 
         theme={{ roundness: 50}}
         underlineColor='white'
         style={{ borderRadius: 50,color:"black",fontWeight:"bold",marginBottom:15, backgroundColor:"white"}} 
        mode="flat"
        label="Email"
        left={<TextInput.Icon size={15} icon={"email-outline"} color={'#80C89D'} style={{backgroundColor:"#DEF4E8"}}></TextInput.Icon>}
        />
        <TextInput 
        theme={{ roundness: 50}}
        underlineColor='white'
        style={{ borderRadius:50,color:"black",fontWeight:"bold",marginBottom:15, backgroundColor:"white"}} 
        mode="flat"
        label="Password"
        secureTextEntry
        left={<TextInput.Icon size={15} icon={"lock-outline"} color={'#A09FF3'} style={{backgroundColor:"#E8E9FD"}}></TextInput.Icon>}
        />
     </View>
     <View style={{paddingTop:10 , marginHorizontal:20}}>
        <TouchableOpacity style={{alignItems:"center",borderRadius:30, paddingVertical:20, backgroundColor:"black" }}
         onPress={() =>
          navigation.navigate('home')
        }
        ><Text style={{color:"white", fontWeight:"bold"}}>Register</Text></TouchableOpacity>
      </View>
      <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around",marginHorizontal:60, marginTop:20}}>
      <View style={{ backgroundColor: 'white', padding: 8, borderRadius: "50%" }}>
        <Entypo name="facebook-with-circle" color="#2C68FC" size={20} backgroundColor="white"/>
        </View>
        <View style={{ backgroundColor: 'white', padding: 8, borderRadius: "50%", }}>
        <Ionicons name="logo-google" color="#FD8D14" size={20} />
        </View>
        <View style={{ backgroundColor: 'white', padding: 8, borderRadius: "50%", display:"flex",alignItems:"center",justifyContent:"center"}}>
        <AntDesign name="apple1" color="black" size={20} backgroundColor=""/>
        </View>
      </View>
    </View>
  );
}
