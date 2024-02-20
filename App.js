
import {StyleSheet,View,Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Images from './screens/Images';
import Signup from './screens/signup';
import Signin from './screens/signin';
import Login from './screens/Login';
import Home from './screens/home';
import Task from './screens/task'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  //  <NavigationContainer>
  //  <Stack.Navigator initialRouteName='task'>
  //       <Stack.Screen name="signup" component={Signup} options={{title: ''}}/>
  //       <Stack.Screen name="home" component={Home} options={{title: ''}}/>
  //       <Stack.Screen name="signin" component={Signin} options={{title: ''}}/>
  //       <Stack.Screen name="login" component={Login} options={{title: ''}}/>
  //       <Stack.Screen name="images" component={Images} options={{title: ''}}/>
  //       <Stack.Screen name="task" component={Task} options={{title: ' '}}/>
  //     </Stack.Navigator>
  //   </NavigationContainer>
  <>
  <Task/>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F0F0F0",
    height:"100%",
    marginTop:20,
  },
});

