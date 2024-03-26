import React, { createContext, useEffect,useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfiguration";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteItemAsync,setItemAsync } from "expo-secure-store";


export const LoginContext = createContext();

export function ThemeProvidercontext({children}){

    const [userToken,setUserToken] = useState(null)
    const [error,setError] = useState('')
    

    const HandleLogin= async(email, password) => {
        try {
          const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
          const userToken = userCredential.user.stsTokenManager.accessToken;
          setUserToken(userToken);   
          await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
          setItemAsync("userEmail",JSON.stringify(email)) 
          console.log(userToken);
        } catch (error) {
          console.log(error);
          setError(error.code)
        }
      }
      

function HandleRegister(email,password){
    return createUserWithEmailAndPassword(FIREBASE_AUTH,email,password)
}

function LogOut(){
    setUserToken(null)
    AsyncStorage.removeItem('userToken')
    deleteItemAsync('userEmail')
    return signOut(FIREBASE_AUTH)
}

const isLoggedIn =async()=>{
    try {
        let userTok = await AsyncStorage.getItem('userToken');
        setUserToken(userTok)
    } catch (error) {
     console.log(error)   
    }
}

function GoogleSigin(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(FIREBASE_AUTH, googleAuthProvider);
}


useEffect(()=>{
  isLoggedIn();
},[])

return(
    <LoginContext.Provider value={{HandleLogin,HandleRegister,LogOut,GoogleSigin,userToken,error,setError}}>
        {children}
    </LoginContext.Provider>
)
}