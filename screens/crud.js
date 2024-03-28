import { useContext, useState, useEffect } from 'react';
import {View,Text, TouchableOpacity, SafeAreaView,Alert, FlatList} from 'react-native';
import { TextInput } from 'react-native-paper';
import { LoginContext } from '../context/screenscontext';
import Todolist from '../components/todolist';

export default function Crud() {

    const [item,setItem] = useState('')

    const {SaveItem,todos,ReadItem} = useContext(LoginContext)

    useEffect(()=>{
        ReadItem();
      },[])

    const handleSaveItem = () => {
        if (typeof item === 'string' && item.trim() !== '') {
            SaveItem(item);
            Alert.alert("saved")
            setItem(item);
            setItem('');
        } else {
            Alert.alert("enter any item")
        }
    };
    

  return (
  <SafeAreaView >
    <View style={{padding:40}}>
    <Text style={{paddingVertical:20, color:"#7E6AFF",fontWeight:"bold"}}>CRUD</Text>
    <View style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
    <TextInput 
     theme={{ roundness: 50}}
     underlineColor='white'
     value={item}
     onChangeText={setItem}
     style={{ borderRadius: 50,color:"#C2C2CB",fontWeight:"bold",marginBottom:15,backgroundColor:"white",}} 
        mode="flat"
        label="Enter activity"
        />
     <TouchableOpacity style={{alignItems:"center",justifyContent:"center",borderRadius:30,paddingHorizontal:60, paddingVertical:15, backgroundColor:"black" }}
         onPress={handleSaveItem}>
          <Text style={{color:"white", fontWeight:"bold"}}>Add</Text>
    </TouchableOpacity>
    
    </View>

    {
        todos.length > 0 ? 
        (<>
        <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({item})=> <Todolist name={item.item} ischecked={item.ischecked} id={item.id}/> }
        />
        </>):
        (
        <>
        <Text style={{textAlign:"center",marginTop:40}}>No data</Text>
        </>
        )
    }
    </View>
  </SafeAreaView>
 
  );
}


