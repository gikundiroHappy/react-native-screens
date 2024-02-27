import React from 'react';
import {Text, View,Image,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Signup({navigation}) {
  return (
    <View>
         <View style={{position:"relative",width:"100%", display:"flex", }}>
        <Image source={require('../assets/login.png')} style={{width:"100%"}}/>
      </View>
      <View style={{position:"absolute",width:"100%",marginTop:150, padding:20,backgroundColor:"#F0F0F0", borderTopRightRadius:40, borderTopLeftRadius:40}}>
      <View style={{}}>
      <Text style={{fontSize:30, textAlign:"center", fontWeight:"bold", marginVertical:30}}>Login</Text>
     </View>
     <View style={{marginTop:20, backgroundColor:"white", paddingHorizontal:20, borderRadius:20, paddingVertical:10}}>
     <TextInput 
     theme={{ roundness: 50}}
     underlineColor='white'
     style={{color:"black",fontWeight:"bold",marginBottom:15,backgroundColor:"white"}} 
        mode="offline"
        label="username"
        left={<TextInput.Icon size={20} icon={"account-outline"} color={'#F6C079'} style={{backgroundColor:"#FAEBE3"}}></TextInput.Icon>}
        />
        
        <TextInput 
        theme={{ roundness: 50}}
        underlineColor='white'
        style={{color:"black",fontWeight:"bold",marginBottom:1, backgroundColor:"white"}} 
        mode="flat"
        label="Password"
        secureTextEntry
        left={<TextInput.Icon size={15} icon={"lock-outline"} color={'#A09FF3'} style={{backgroundColor:"#E8E9FD"}}></TextInput.Icon>}
        />
     </View>
     <View style={{paddingTop:30, display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Text style={{color:"#9DA5FA",fontWeight:"bold"}} >
          Forget passord?
        </Text>
        <TouchableOpacity style={{alignItems:"center",borderRadius:30,paddingHorizontal:60, paddingVertical:15, backgroundColor:"black" }}
         onPress={() =>
          navigation.navigate('signin')
        }><Text style={{color:"white", fontWeight:"bold"}}>Login</Text></TouchableOpacity>
      </View>
      <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around",marginHorizontal:60, marginTop:80}}>
      <View style={{ backgroundColor: 'white', padding: 8, borderRadius: "50%", }}>
        <Entypo name="facebook-with-circle" color="#30A2FF" size={20} backgroundColor="white"/>
        </View>
        <View style={{ backgroundColor: 'white', padding: 8, borderRadius: "50%", }}>
        <Ionicons name="logo-google" color="#FD8D14" size={20} />
        </View>
        <View style={{ backgroundColor: 'white', padding: 8, borderRadius: "50%", display:"flex",alignItems:"center",justifyContent:"center"}}>
        <AntDesign name="apple1" color="black" size={20} backgroundColor=""/>
        </View>
      </View>
      </View>
    </View>
  );
}
