
import {StyleSheet,View,Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Images from './screens/Images';
import Signup from './screens/signup';
import Signin from './screens/signin';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator>
        {/* <Stack.Screen name="login" component={Login} /> */}
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="signin" component={Signin} />
        {/* <Stack.Screen name="images" component={Images} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F0F0F0",
    height:"100%",
    marginTop:20,
  },
});

