import React,{useContext} from 'react';
import {Text, View,Image,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { LoginContext } from '../context/screenscontext';
import FlashMessage, {showMessage} from 'react-native-flash-message';

export default function Signin({navigation}) {

  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('')

  const {HandleRegister} = useContext(LoginContext)

  const HandleSubmit = async() =>{
    try {
      await HandleRegister(email,password)
      console.log(email,password)
      showMessage({
       message: "you have registered",
       hideStatusBar:true,
       type: "success",
       icon:"success",
       duration:6000
     });
     navigation.navigate('signup')
    } catch (error) {
      console.log(error)
     showMessage({
       message: error.code.toString(),
       hideStatusBar:true,
       type: "danger",
       icon:"danger",
      duration:3000
     });
    }
   }
 

  return (
    <KeyboardAvoidingView>
    <View>
      <FlashMessage position="top" style={{ zIndex: 999 }} />
          <View style={{ display:"flex", flexDirection:"row",justifyContent:"center", marginTop:50}}>
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
        value={email}
        onChangeText={setEmail}
        left={<TextInput.Icon size={15} icon={"email-outline"} color={'#80C89D'} style={{backgroundColor:"#DEF4E8"}}></TextInput.Icon>}
        />
        <TextInput 
        theme={{ roundness: 50}}
        underlineColor='white'
        style={{ borderRadius:50,color:"black",fontWeight:"bold",marginBottom:15, backgroundColor:"white"}} 
        mode="flat"
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        left={<TextInput.Icon size={15} icon={"lock-outline"} color={'#A09FF3'} style={{backgroundColor:"#E8E9FD"}}></TextInput.Icon>}
        />
     </View>
     <View style={{paddingTop:10 , marginHorizontal:20}}>
        <TouchableOpacity style={{alignItems:"center",borderRadius:30, paddingVertical:20, backgroundColor:"black" }}
         onPress={HandleSubmit}
        ><Text style={{color:"white", fontWeight:"bold"}}>Register</Text></TouchableOpacity>
      </View>
      <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around",marginHorizontal:60, marginTop:35}}>
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
    </KeyboardAvoidingView>
  );
}
