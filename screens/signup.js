import React from 'react';
import {Text, View,Image,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useContext } from 'react';
import { LoginContext } from '../context/screenscontext';
import FlashMessage,{ showMessage, } from "react-native-flash-message";

export default function Signup({navigation}) {

  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('')

  const {HandleLogin,GoogleSigin,error,setError} = useContext(LoginContext)

  // const HandleSubmit = async() =>{
  //  try {
  //    await HandleLogin(email,password)
  //    showMessage({
  //     message: "you are logged in",
  //     hideStatusBar:true,
  //     type: "success",
  //     icon:"success",
  //     duration:6000
  //   });
  //   navigation.navigate('home')
  //  } catch (error) {
  //   showMessage({
  //     message: error.code.toString(),
  //     hideStatusBar:true,
  //     type: "danger",
  //     icon:"danger",
  //    duration:3000
  //   });
  //  }
  // }

  const HandleSubmit = () =>{
     if(email == '' && password==''){
      showMessage({
        message:"empty",
        type: "danger",
        icon:"danger",
        duration:3000
      })
    }
      else{
        HandleLogin(email,password)
        if(error.length!=0){
          showMessage({
            message:`${error}`,
            type: "danger",
            icon:"danger",
            duration:3000
          })
        }
      }
     
   }

  const HandleGoogleSignin = async() =>{
    try {
      await GoogleSigin()  
    } catch (error) {
       console.log(error)
    }
   }
   

  return (
    <View>
      <FlashMessage position="top" style={{ zIndex: 999 }} />
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
     value={email}
     onChangeText={setEmail}
     style={{color:"black",fontWeight:"bold",marginBottom:15,backgroundColor:"white"}} 
        mode="offline"
        label="Email"
        left={<TextInput.Icon size={20} icon={"account-outline"} color={'#F6C079'} style={{backgroundColor:"#FAEBE3"}}></TextInput.Icon>}
        />
        
        <TextInput 
        theme={{ roundness: 50}}
        underlineColor='white'
        style={{color:"black",fontWeight:"bold",marginBottom:1, backgroundColor:"white"}} 
        mode="flat"
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        left={<TextInput.Icon size={15} icon={"lock-outline"} color={'#A09FF3'} style={{backgroundColor:"#E8E9FD"}}></TextInput.Icon>}
        />
     </View>
     <View style={{paddingTop:30, display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
      <View>
        <Text style={{color:"#9DA5FA",fontWeight:"bold"}} >
          Don't Have an account?
        </Text> 
        <TouchableOpacity onPress={()=>navigation.navigate('signin')}>
          <Text style={{fontWeight:"bold",paddingVertical:10}}>Register</Text></TouchableOpacity>
      </View>
        <TouchableOpacity style={{alignItems:"center",borderRadius:30,paddingHorizontal:60, paddingVertical:15, backgroundColor:"black" }}
         onPress={HandleSubmit}>
          <Text style={{color:"white", fontWeight:"bold"}}>Login</Text></TouchableOpacity>
      </View>

      <TouchableOpacity style={{alignItems:"center",borderRadius:30,paddingHorizontal:60, paddingVertical:15, borderWidth:1,borderColor:"#FD8D14",marginTop:20,display:"flex", flexDirection:"row",justifyContent:"center",gap:20 }}
         onPress={HandleGoogleSignin}>
          <Ionicons name="logo-google" color="#FD8D14" size={20} />
          <Text style={{color:"#FD8D14", fontWeight:"bold"}}>Login</Text>
          </TouchableOpacity>

      <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around",marginHorizontal:60, marginTop:30}}>
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
