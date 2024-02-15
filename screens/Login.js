import { StatusBar } from 'expo-status-bar';
import {View,Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TextInput,Checkbox } from 'react-native-paper';


export default function App() {
  return (
     <View style={{padding:40}}>
     <View>
     <FontAwesome name="close" style={{fontSize:15}}/>
     </View>
     <View >
      <Text style={{fontSize:20, textAlign:"center", fontWeight:"bold"}}>Sign In</Text>
      <Text style={{textAlign:"center", marginTop:15, fontSize:17}}>Welcome back! Please enter your details</Text>
     </View>
      <View style={{display:"flex",flexDirection:"column",gap:15, marginTop:40, }}>
        <TextInput style={{color:"black",fontWeight:"bold"}} 
        mode="offline"
        label="Email"
        left={<TextInput.Icon size={15} icon={"email-outline"} color={'purple'}></TextInput.Icon>}
        />
        <TextInput style={{color:"black",fontWeight:"bold"}} 
        mode="offline"
        label="Password"
        secureTextEntry
        left={<TextInput.Icon size={15} icon={"lock-outline"} color={'purple'}></TextInput.Icon>}
        />
        <View style={{display:"flex",flexDirection:"row",alignItems:"center" ,gap:15,}}>
        <Checkbox status='checked'/>
        <Text>Remember</Text>
        </View>
        
      </View>
      <View style={{paddingTop:60}}>
        <Text style={{textAlign:"center", fontWeight:"bold", color:"#30A2FF", marginBottom:30}} >
          forgot password
        </Text>
        <TouchableOpacity style={{alignItems:"center",borderRadius:30, paddingVertical:20, backgroundColor:"#30A2FF" }}><Text style={{color:"white", fontWeight:"bold"}}>Sign In</Text></TouchableOpacity>
      </View>
      <View style={{paddingTop:20, display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <Text style={{}} >
          Create account
        </Text>
        <TouchableOpacity style={{alignItems:"center",borderRadius:30,paddingHorizontal:10, paddingVertical:10, backgroundColor:"#EFECEC" }}><Text style={{color:"#F57D1F", fontWeight:"bold"}}>Sign Up</Text></TouchableOpacity>
      </View>
     <StatusBar style="auto" />
     </View>
  );
}


