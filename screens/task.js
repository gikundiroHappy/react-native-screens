import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Card from '../components/card.jsx'
import Clothes from '../components/clothes.jsx'
import Clients from '../components/clients.jsx';


export default function Task() {
    const data=[
      {
      id:1,
      name:"All"
    },
    {
      id:2,
      name:"Man"
    },
    {
      id:3,
      name:"Women"
    },
    {
      id:4,
      name:"Dress"
    },
    {
      id:5,
      name:"Shoes"
    },
  ]
  const clothes=[
    {
    id:1,
    title:"#1Best Seller",
    image:"https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Jeans",
    price:300
  },
  {
    id:2,
    title:"#2Best Seller",
    image:"https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Jeans",
    price:300
  },
  {
    id:3,
    title:"#3Best Seller",
   image:"https://images.pexels.com/photos/1937336/pexels-photo-1937336.jpeg?auto=compress&cs=tinysrgb&w=600",
   name:"Jeans",
    price:300
  },
  {
    id:4,
    title:"#4Best Seller",
    image:"https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Jeans",
    price:300
  },
  {
    id:5,
    title:"#5Best Seller",
    image:"https://images.pexels.com/photos/3735646/pexels-photo-3735646.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Jeans",
    price:300
  },
]
const clients=[
  {
    id:1,
    image:"https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"White T-shirt",
    price:45
  },
  {
    id:2,
    image:"https://images.pexels.com/photos/7773805/pexels-photo-7773805.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"Purple T-shirt",
    price:45
  },
  {
    id:3,
    image:"https://images.pexels.com/photos/14790863/pexels-photo-14790863.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"White T-shirt",
    price:45
  },
  {
    id:4,
    image:"https://images.pexels.com/photos/14620531/pexels-photo-14620531.jpeg?auto=compress&cs=tinysrgb&w=600",
    title:"darkblue T-shirt",
    price:45
  },
]
  return (
 <View style={{paddingTop:35, backgroundColor:"#FFFFFF"}}>
  <ScrollView>
    <View style={{paddingHorizontal:30,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <View style={{backgroundColor: '#ECECEC', padding: 8, borderRadius: "50%", display:"flex",alignItems:"center",justifyContent:"center"}}>
<AntDesign name="arrowleft" size={15}/>
</View>
<Text style={{fontWeight:"bold",fontSize:16}}>Search</Text>
<MaterialCommunityIcons name="tune-vertical" size={18}/>
    </View>
    <View style={{marginTop:30, paddingHorizontal:30,}}>
    <TextInput 
        theme={{ roundness: 50}}
        underlineColor='#F7F8FD'
        style={{fontWeight:700,marginBottom:1, backgroundColor:"#F7F8FD", borderRadius: 50,}} 
        mode="flat"
        label="Search..."
        left={<TextInput.Icon size={25} icon={"magnify"} color={'#C2C2CB'} ></TextInput.Icon>}
        right={<TextInput.Icon size={20} icon={"tune-variant"} color={'#C2C2CB'} ></TextInput.Icon>}
        />
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:40}}>
{data.map((item,index)=>{
  return(
    <View key={index} style={{marginTop:30,marginRight:10 }}>
       <Card name={item.name} />
    </View>
  )
})}
    </ScrollView>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft:30}}>
{clothes.map((datas,index)=>{
  return(
    
    <View key={index} style={{marginTop:30,marginRight:10 }}>
       <Clothes title={datas.title} image={datas.image} name={datas.name} price={datas.price} />
    </View>
  )
})}
    </ScrollView>

    <View style={{paddingHorizontal:30,marginTop:30,}}>
      <Text style={{fontWeight:700, fontSize:20}}>product Result(43)</Text>
      <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:10 }}>
{clients.map((data,index)=>{
  return(
    
    <View key={index} style={{marginTop:30,marginRight:10,}}>
       <Clients image={data.image} title={data.title}  price={data.price} />
    </View>
  )
})}
</View>
    </View>
    </ScrollView>
 </View>
  );
}
