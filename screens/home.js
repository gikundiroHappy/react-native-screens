import React, { useContext } from 'react';
import {View,Text,ScrollView, TouchableOpacity} from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { LoginContext } from '../context/screenscontext';

export default function Home() {

  const {user, LogOut} = useContext(LoginContext);
  console.log(user);

  const HandleLogout = async() =>{
    try {
      await LogOut()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <View style={{backgroundColor:"#EDEBF5" }}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontWeight:"bold",marginHorizontal:40,fontSize:30, marginVertical:40}}>Home</Text>
            <Text style={{fontSize:15,paddingRight:35,color:"#7E6AFF"}}>{user && user.email}</Text>
            <TouchableOpacity onPress={HandleLogout}><Text style={{marginRight:20,fontSize:13,fontWeight:"bold"}}>logout</Text></TouchableOpacity>
        </View>
      <View style={{display:"flex", flexDirection:"row",justifyContent:"space-around",marginHorizontal:20, marginTop:5,paddingBottom:20}}>

        <View>
        <View style={{ backgroundColor: 'white', borderRadius: "100%", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row",width: 60,height: 60,}}>
          <Fontisto name="circle-o-notch" color="#7E6AFF" size={20} backgroundColor="white"/>
        </View>
        <Text style={{marginVertical:25, fontWeight:"bold", fontSize:13}}>Price Alert</Text>
        </View>

        <View>
        <View style={{ backgroundColor: 'white', padding: 16, borderRadius: "100%", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row",width: 60,height: 60, }}>
        <MaterialCommunityIcons name="arrow-left-circle-outline" color="#F7C480" size={20} />
        </View>
        <Text style={{marginVertical:25, fontWeight:"bold", fontSize:13}}>Convert</Text>
        </View>

        <View>
        <View style={{ backgroundColor: 'white', padding: 16, borderRadius: "100%", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row",width: 60,height: 60,}}>
        <Ionicons name="square-outline" color="#7589FF" size={20} backgroundColor=""/>
        </View>
        <Text style={{marginVertical:25, fontWeight:"bold", fontSize:13}}>Compare</Text>
        </View>

        <View>
        <View style={{ backgroundColor: 'white', padding: 16, borderRadius: "100%", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row",width: 60,height: 60,}}>
        <MaterialIcons name="stars" color="#7EC89A" size={24} backgroundColor=""/>
        </View>
        <Text style={{marginVertical:25, fontWeight:"bold", fontSize:13}}>Watch list</Text>
        </View>
      </View>
      <View style={{backgroundColor:"#F6F6F9",borderTopRightRadius:40, borderTopLeftRadius:40,paddingHorizontal:25}}>
        <Text style={{fontWeight:500,fontSize:20, paddingVertical:30}}>Your wallet</Text>
        <View >
        <ScrollView horizontal={true}>
          <View style={{display:"flex",flexDirection:"row",gap:20}}>
        <View style={{paddingBottom:5, backgroundColor:"#FFFFFF",padding:15,borderRadius:20, display:"flex",flexDirection:"row",justifyContent:"space-between",width:"60%"}}>
            <View style={{}}>
                <Text style={{fontWeight:"bold",color:"#C2C2CB"}}>Neo</Text>
                <Text style={{fontWeight:"bold",marginTop:4}}>NEO 0.67</Text>
                <Text style={{fontWeight:"bold", marginTop:16}}>$56.127</Text>
            </View>
            <View>
            <View style={{ backgroundColor: '#CFEDCA', padding: 1, borderRadius: "100%", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row",width: 40,height: 40,marginBottom:20}}>
        <FontAwesome6 name="archway" color="#6FC584" size={15}/>
        </View>
        <View style={{display:"flex",flexDirection:"row"}}>
        <MaterialIcons name="keyboard-arrow-down" color="red" size={15}/>
            <Text style={{color:"#C2C2CB",fontWeight:"bold"}}>2.5%</Text>
            </View>
            </View>
            
        </View>
        <View style={{paddingBottom:5, backgroundColor:"#FFFFFF",padding:15,borderRadius:20, display:"flex",flexDirection:"row",justifyContent:"space-between",width:"60%"}}>
            <View style={{}}>
                <Text style={{fontWeight:"bold",color:"#C2C2CB"}}>Neo</Text>
                <Text style={{fontWeight:"bold",marginTop:4}}>NEO 0.67</Text>
                <Text style={{fontWeight:"bold", marginTop:16}}>$56.127</Text>
            </View>
            <View>
            <View style={{ backgroundColor: '#CFEDCA', padding: 1, borderRadius: "100%", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row",width: 40,height: 40,marginBottom:20}}>
        <FontAwesome6 name="archway" color="#6FC584" size={15}/>
        </View>
        <View style={{display:"flex",flexDirection:"row"}}>
        <MaterialIcons name="keyboard-arrow-down" color="red" size={15}/>
            <Text style={{color:"#C2C2CB",fontWeight:"bold"}}>2.5%</Text>
            </View>
            </View>
            
        </View>
        </View>
        </ScrollView> 
        </View>

        <View>

      <Text style={{fontWeight:500,fontSize:20, paddingVertical:30}}>Trending</Text>
      <View style={{paddingBottom:5, padding:15,borderRadius:20, display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <View style={{display:"flex",flexDirection:"row", gap:10}}>
            <View style={{ backgroundColor: '#FFE3C3', padding: 1, borderRadius: "100%", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row",width: 40,height: 40,marginBottom:20}}>
        <FontAwesome name="bitcoin" color="#F59621" size={15}/>
        </View>
        <View>
        <Text style={{fontWeight:"bold"}}>Bitcon</Text>
                <Text style={{fontWeight:"bold",marginTop:4,color:"#C2C2CB"}}>BTC</Text>
        </View>
            </View>
            <View style={{}}>
                <Text style={{fontWeight:"bold"}}>$32.650</Text>
                <View style={{display:"flex",flexDirection:"row",marginTop:10}}>
        <MaterialIcons name="keyboard-arrow-up" color="#74C78B" size={15}/>
            <Text style={{color:"#C2C2CB",fontWeight:"bold"}}>2.5%</Text>
            </View>
            </View>
           
        </View>
        <View style={{paddingBottom:35, padding:15,borderRadius:20, display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <View style={{display:"flex",flexDirection:"row", gap:10}}>
            <View style={{ backgroundColor: '#FAE0E7', padding: 1, borderRadius: "100%", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"row",width: 40,height: 40,marginBottom:20}}>
        <FontAwesome name="bitcoin" color="#F0458A" size={15}/>
        </View>
        <View>
        <Text style={{fontWeight:"bold"}}>Bytecon</Text>
                <Text style={{fontWeight:"bold",marginTop:4,color:"#C2C2CB"}}>BCN</Text>
        </View>
            </View>
            <View style={{}}>
                <Text style={{fontWeight:"bold"}}>$32.650</Text>
                <View style={{display:"flex",flexDirection:"row",marginTop:10}}>
        <MaterialIcons name="keyboard-arrow-up" color="#74C78B" size={15}/>
            <Text style={{color:"#C2C2CB",fontWeight:"bold"}}>2.5%</Text>
            </View>
            </View>
           
            
        </View>
      </View>
      </View>
     
    </View>
  );
}
