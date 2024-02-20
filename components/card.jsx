import React from 'react';
import {View,Text} from 'react-native';


export default function Card({name}) {
  return (
 <View style={{borderWidth:1,borderColor:"#F3F3F3",  borderRadius:50, paddingVertical:3,paddingHorizontal:15 }}>
    <Text style={{textAlign:"center",padding:10,fontWeight:600,color:"#838383"}}>{name}</Text>
 </View>
  );
}
