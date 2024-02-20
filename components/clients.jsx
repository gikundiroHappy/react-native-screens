import React from 'react';
import {View,Text,Image} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons'


export default function Clients({image,title,price}) {
  return (
 <View style={{width:"",backgroundColor:"",width:162,position:"relative"}}>
    <Image source={{uri:image}} style={{ borderRadius: 15 ,width:"100%", height:200}}/>
    <View style={{position:"absolute", backgroundColor: 'white', padding: 8, borderRadius: "50%", display:"flex",alignItems:"center",justifyContent:"center",marginLeft:120, marginTop:10}}>
    <Octicons name="heart"/>
    </View>
    <Text style={{fontWeight:700,color:"#646464",fontSize:17,marginTop:10}}>{title}</Text>
    <Text style={{fontWeight:700,marginTop:5}}>${price}</Text>
 </View>
  );
}
