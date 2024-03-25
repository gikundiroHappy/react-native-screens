import React, { createContext, useEffect,useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfiguration";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginContext = createContext();

export function ThemeProvidercontext({children}){
    const [user,setUser] = useState("")
    const [userToken,setUserToken] = useState(null)
    const [error,setError] = useState('')
    const [isLogedIn,setIsLogedIn] = useState(false)
    

    const HandleLogin= async(email, password) => {
        try {
          const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
          const userToken = userCredential.user.accessToken;
          setUserToken(userToken);
          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('userEmail', email);
        //   setIsLogedIn(true)
          console.log(userCredential);
          return userCredential;
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
    // setIsLogedIn(false)
    AsyncStorage.removeItem('userToken')
    return signOut(FIREBASE_AUTH)
}

const isLoggedIn =async()=>{
    try {
        let userTok = await AsyncStorage.getItem('userToken');
        let userEmail = await AsyncStorage.getItem('userEmail');
        setUserToken(userTok)
        setUser(userEmail);
    } catch (error) {
     console.log(error)   
    }
}

function GoogleSigin(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(FIREBASE_AUTH, googleAuthProvider);
}


useEffect(()=>{
  onAuthStateChanged(FIREBASE_AUTH,(currentUser)=>{
    setUser(currentUser);
  });
  isLoggedIn();
},[])

return(
    <LoginContext.Provider value={{HandleLogin,HandleRegister,user,LogOut,GoogleSigin,userToken,error,setError}}>
        {children}
    </LoginContext.Provider>
)
}