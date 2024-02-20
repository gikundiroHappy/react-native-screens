import React from 'react';
import {View,Text,ImageBackground} from 'react-native';


export default function Clothes({title,image,name,price}) {
  return (
    <View style={{ borderRadius: 20, overflow: 'hidden'}}>
    <ImageBackground source={{ uri: image }} style={{ borderRadius: "" ,width:250, height:150}}>
 <View>
    <View style={{padding:10,backgroundColor:"#C59C5E", width:150, marginVertical:15, marginHorizontal:20,borderRadius:30}}>
    <Text style={{color:"white",fontWeight:700,textAlign:"center"}}>{title}</Text>
    </View>
    <View style={{backgroundColor:"rgba(000,000,000,0.5)", display:"flex",flexDirection:"row",justifyContent:"space-between", borderBottomLeftRadius:20,borderBottomRightRadius:20, marginTop:46, paddingHorizontal:10}}>
         <Text style={{textAlign:"center",padding:10,color:"white",fontWeight:600}}>{name}</Text>
    <Text style={{textAlign:"center",padding:10,color:"white",fontWeight:600 }}>${price}</Text> 
    </View>
 </View>
 </ImageBackground>
 </View>
  );
}
