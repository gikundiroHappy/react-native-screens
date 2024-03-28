import React, { useContext, useEffect, useState } from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { LoginContext } from '../context/screenscontext';


export default function Todolist({name,ischecked,id}) {

  const [isChecked,setIsChecked] = useState(ischecked)
  const {DeleteItem,UpdateItem} = useContext(LoginContext)
  console.log(isChecked)

  const toggleChecked = () => {
    setIsChecked(!isChecked);
    console.log(isChecked)
};

const Handledelete = () => {
  DeleteItem(id)
};

useEffect(()=>{
  UpdateItem(id)
},[ischecked])

  return (
    <View style={{ display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:"white",marginTop:20,paddingHorizontal:20}}>
 <View style={{ marginVertical:5, display:"flex",flexDirection:"row",alignItems:"center",paddingVertical:15,gap:20, }}>
  <TouchableOpacity onPress={()=>setIsChecked(!isChecked)}>
   {
    isChecked ? 
    (
      <><MaterialCommunityIcons name='checkbox-marked-circle' size={24} onPress={toggleChecked}/></>
    ):
    (
      <><MaterialCommunityIcons name='checkbox-blank-circle-outline' size={24} onPress={toggleChecked}/></>
    )
   }
   </TouchableOpacity>
    <Text style={{fontWeight:600}}>{name}</Text>
 </View>
 <TouchableOpacity onPress={Handledelete}>
 <MaterialCommunityIcons name='delete-outline' size={24} color="red"/>
 </TouchableOpacity>
 </View>
  );
}
