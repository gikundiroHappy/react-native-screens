
import {StyleSheet,View,Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Images from './screens/Images';
import Signup from './screens/signup';
import Signin from './screens/signin';
import Login from './screens/Login';
import Home from './screens/home';
import Task from './screens/task'
import ThemeProvidercontext from './context/screenscontext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvidercontext>
   <NavigationContainer>
   <Stack.Navigator initialRouteName='signup'>
        <Stack.Screen name="signup" component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="signin" component={Signin} options={{ headerShown: false }}/>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="images" component={Images} options={{ headerShown: false }}/>
        <Stack.Screen name="task" component={Task} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvidercontext>
 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F0F0F0",
    height:"100%",
    marginTop:20,
  },
});

