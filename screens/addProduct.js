import { StatusBar } from 'expo-status-bar';
import {View,Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function AddProduct() {
 
    cont [title,setTitle] = useState('')

    

  return (
     <View style={{padding:40}}>
    
    <TextInput 
         theme={{ roundness: 50}}
        underlineColor='white'
        style={{ borderRadius: 50,color:"black",fontWeight:"bold",marginBottom:15, backgroundColor:"white"}} 
        mode="flat"
        label="Title"
        value={title}
        onChangeText={setTitle}
        />
       
     <StatusBar style="auto" />
     </View>
  );
}


