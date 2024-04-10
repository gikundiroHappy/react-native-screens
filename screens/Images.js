import React, {useContext, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View,Image, TouchableOpacity,StyleSheet ,Modal, ScrollView,KeyboardAvoidingView,Dimensions,Platform} from 'react-native';
import { TextInput,IconButton } from "react-native-paper";
import Icon from 'react-native-vector-icons/Entypo'; 
import ArrowIcon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { ActivityIndicator } from 'react-native';
import { LoginContext } from '../context/screenscontext';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Images() {

  const [model,setModel] = useState(false)
  const [title,setTitle] = useState('')
  const [status,setStatus] = useState('')
  const [amount,setAmount] = useState('')
  const [picurl,setPicurl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const {pickImage, AddProduct, ReadProduct,product} = useContext(LoginContext)

  const handleAddProducts = () => {
    AddProduct(title,status,amount,picurl);
        setTitle(title);
        setStatus(status);
        setAmount(amount);
        setPicurl(picurl)

        setModel(!model)
};

useEffect(()=>{
  ReadProduct()
  console.log(product)
},[])

  return (
    <KeyboardAvoidingView enabled  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={{backgroundColor:"#F5F5F5"}}>
      <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center",marginTop:20}}>
        <View>
          <IconButton
            icon={() => <ArrowIcon name="arrow-left-bold-box-outline" size={24} />} 
          />
        </View>
        <View>
          <Text>text to Image</Text>
        </View>

        <View>
          <IconButton
            icon={() => <Icon name="plus" size={24} onPress={()=>setModel(true)}/>} 
          />


<Modal visible={model}>
  <ScrollView>
    <View style={styles.modalcontainer}>
                   <Text style={{color:"#4ba26a",fontWeight:"bold", fontSize:15,paddingVertical:20,textAlign:"center"}}>ADD A NEW PRODUCT</Text>
            {picurl?
          <>
            <Image
              style={styles.image}
              source={{
                uri: picurl,
              }}
            />
          </>
        :
          <>
          {
            isLoading?
            <>
            <ActivityIndicator/>
            </>
            :
            <>
            <Image
              style={styles.image}
              source={{
                uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
              }}
            />
            <TouchableOpacity onPress={() => pickImage(setIsLoading,setPicurl)}>
            <Text style={styles.Text}>Click to upload</Text>
            </TouchableOpacity>
            </>
          } 
          </>
           }     
                   <TextInput 
        underlineColor='white'
        style={{ borderRadius: 10,color:"black",marginBottom:15, backgroundColor:"white",marginBottom:20}} 
        mode="flat"
        textColor='black'
        theme={{colors:{primary:"rgba(000,000,000,0.1)"}, roundness: 10}}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
        />

<TextInput 
        underlineColor='white'
        style={{ borderRadius: 10,color:"black",marginBottom:15, backgroundColor:"white",marginBottom:20}} 
        mode="flat"
        textColor='black'
        theme={{colors:{primary:"rgba(000,000,000,0.1)"}, roundness: 10}}
        placeholder="Enter status"
        value={status}
        onChangeText={setStatus}
        />

<TextInput 
        underlineColor='white'
        style={{ borderRadius: 10,color:"black",marginBottom:15, backgroundColor:"white",marginBottom:20}} 
        mode="flat"
        textColor='black'
        theme={{colors:{primary:"rgba(000,000,000,0.1)"}, roundness: 10}}
        placeholder="Enter amount"
        keyboardType='numeric'
        value={amount}
        onChangeText={setAmount}
        />

      <TouchableOpacity style={{backgroundColor:"#4ba26a",borderRadius:7}} onPress={handleAddProducts}>
        <Text style={{textAlign:"center",paddingVertical:13, fontWeight:"bold",color:"white"}}>Add</Text>
      </TouchableOpacity>

                   
    </View>
  </ScrollView>
</Modal>


        </View>
      </View>


      <View style={{width:"100%", display:"flex", flexDirection:"row",justifyContent:"center", flexWrap: "wrap", gap:10, marginTop:20}}>
        {/* <Image source={require('../assets/house1.jpeg')} style={{width:"45%",height:150, borderRadius:10}}/> */}
        {/* <Image source={require('../assets/house2.jpeg')} style={{width:"45%",height:150, borderRadius:10}}/> */}
        {/* <Image source={require('../assets/house3.jpeg')} style={{width:"45%",height:150, borderRadius:10}}/> */}
        {/* <Image source={require('../assets/house4.jpeg')} style={{width:"45%",height:150, borderRadius:10}}/> */}
      </View>

      {product.map((item,index)=>(
        <View key={index}>
          <Image source={{ uri: item.picurl }} style={{height:150, width:150}}/>
          <Text>{item.title}</Text>
          <Text>{item.status}</Text>
          <Text>{item.amount}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  modalcontainer:{
    backgroundColor:"rgba(000,000,000,0.1)",
    marginHorizontal:30,
    marginVertical:80,
    elevation:10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 20,
    display:"flex",
    justifyContent:"center",
    flex:1
  },
  Text: {
    color: "black",
    fontSize: 16,
    alignSelf: "center",
    paddingBottom:20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: "center",
  },
});
