import React, {useRef,useState} from 'react'
import {View, SafeAreaView,Dimensions,Image,Text,TouchableOpacity} from 'react-native';
import ViewPager from '@react-native-community/viewpager'
import Button from '../Components/Button';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Onboarding({navigation}) {

    const pagerRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = pageNumber => {
        pagerRef.current.setPage(pageNumber);
        setCurrentPage(pageNumber);
      };

      const handlePageScrollStateChanged = (event) => {
        if (event === 'idle') {
          setCurrentPage(pagerRef.current?.getCurrentPage() || 0);
        }
      };

      const renderPagination = () => {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'center',paddingVertical:30,backgroundColor:"white" }}>
            {[0, 1, 2].map((index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: 35,
                  height: 7,
                  borderRadius: 5,
                  backgroundColor: currentPage === index ? '#4ba26a' : '#F3F3F3',
                  marginHorizontal: 5,
                }}
                onPress={() => handlePageChange(index)}
              />
            ))}
          </View>
        );
      };

  
     
  return (
   <View style={{ flex: 1 }}>
    <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}
      onPageSelected={(event) => setCurrentPage(event.nativeEvent.position)}
      onPageScrollStateChanged={(event) => handlePageScrollStateChanged(event)}
    >
     <View key="1">
     <SafeAreaView style={{backgroundColor:"white",width:width,height:height}}>
        <TouchableOpacity onPress={() => {handlePageChange(1)}}
        style={{display:"flex",flexDirection:"row",justifyContent:"flex-end", paddingHorizontal:20,paddingTop:20}}>
        <Text style={{fontFamily:"Poppins_400Regular",display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>Skip</Text>
        </TouchableOpacity >

    <View style={{paddingHorizontal:60,paddingVertical:30,display:"flex",alignItems:"center",justifyContent:"center",}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"center",}}>
    <Image source={require('../assets/boardone.png')} style={{ width: 200, height: 250 }}/>
    </View>
    <Text style={{fontFamily:"Poppins_600SemiBold", fontSize:18, paddingVertical:30,paddingHorizontal:40,textAlign:"center"}}>Monitoring soil and plant</Text>
    <Text style={{fontFamily:"Poppins_400Regular", fontSize:13,paddingBottom:60,color:"#A1A1A1"}}>we aim to use optical (VIR) sensing to observe the fields and make timely crop management decisions.</Text>
    </View>

    <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,paddingHorizontal:40}}>
        <TouchableOpacity style={{backgroundColor:"#F3F3F3",borderRadius:7,width:"47%"}}>
            <Text style={{textAlign:"center",paddingVertical:13, fontWeight:"bold",color:"#A1A1A1"}}>Back</Text>
        </TouchableOpacity>
        <View style={{width:"47%"}}>
        <Button title="Next" onPress={() => {handlePageChange(1)}}/>
        </View>
    </View>
    
    </SafeAreaView>
     </View>

     <View key="2">
     <SafeAreaView style={{backgroundColor:"white",width:width,height:height}}>
     <TouchableOpacity onPress={() => {handlePageChange(2)}}
     style={{display:"flex",flexDirection:"row",justifyContent:"flex-end", paddingHorizontal:20,paddingTop:20}}>
        <Text style={{fontFamily:"Poppins_400Regular",display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>Skip</Text>
        </TouchableOpacity >
    <View style={{paddingHorizontal:60,paddingVertical:30,display:"flex",alignItems:"center",justifyContent:"center",}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"center",}}>
    <Image source={require('../assets/boardtwo.png')} style={{ width: 200, height: 250 }}/>
    </View>
    <Text style={{fontFamily:"Poppins_600SemiBold", fontSize:18, paddingVertical:30,paddingHorizontal:40,textAlign:"center"}}>Early detection of plant and soil diseases</Text>
    <Text style={{fontFamily:"Poppins_400Regular", fontSize:13,paddingBottom:60,color:"#A1A1A1"}}>our project can detect plant and soil diseases using an existing camera sensor that tracks the plants in real-time day by day.</Text>
    </View>

    <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,paddingHorizontal:40}}>
        <TouchableOpacity style={{backgroundColor:"#F3F3F3",borderRadius:7,width:"47%"}} onPress={() => {handlePageChange(0)}}>
            <Text style={{textAlign:"center",paddingVertical:13, fontWeight:"bold",color:"#A1A1A1"}}>Back</Text>
        </TouchableOpacity>
        <View style={{width:"47%"}}>
        <Button title="Next" onPress={() => {handlePageChange(2)}}/>
        </View>
    </View>
    
    </SafeAreaView>
     </View>

     <View key="3">
     <SafeAreaView style={{backgroundColor:"white",width:width,height:height}}>
     <TouchableOpacity onPress={()=> navigation.navigate('test')}
     style={{display:"flex",flexDirection:"row",justifyContent:"flex-end", paddingHorizontal:20,paddingTop:20}}>
        <Text style={{fontFamily:"Poppins_400Regular",display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>Skip</Text>
        </TouchableOpacity >
    <View style={{paddingHorizontal:60,paddingVertical:20,display:"flex",alignItems:"center",justifyContent:"center"}}>
    <View style={{display:"flex",flexDirection:"row",justifyContent:"center",}}>
    <Image source={require('../assets/boardthree.png')} style={{ width: 200, height: 250 }}/>
    </View>
    <Text style={{fontFamily:"Poppins_600SemiBold", fontSize:18, paddingVertical:30,paddingHorizontal:40,textAlign:"center"}}>Improve agriculture precision</Text>
    <Text style={{fontFamily:"Poppins_400Regular", fontSize:13,paddingBottom:60,color:"#A1A1A1"}}>we will use satellite imagery, image processing, deep learning, computer vision, and remote sensing to detect changes in the field and crops and solve the problems whenever they pop.</Text>
    </View>

    <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,paddingHorizontal:40}}>
        <TouchableOpacity style={{backgroundColor:"#F3F3F3",borderRadius:7,width:"47%"}} onPress={() => {handlePageChange(1)}}>
            <Text style={{textAlign:"center",paddingVertical:13, fontWeight:"bold",color:"#A1A1A1"}}>Back</Text>
        </TouchableOpacity>
        <View style={{width:"47%"}}>
        <Button title="Next" onPress={()=> navigation.navigate('login')}/>
        </View>
    </View>
    
    </SafeAreaView>
     </View>
    </ViewPager>

    {renderPagination()}
    </View>
 
  );
}
