import React, { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfiguration";

export const LoginContext = createContext();

export default function ThemeProvidercontext({children}){
    const [user,setUser] = React.useState("")

function HandleLogin(email,password){
    return signInWithEmailAndPassword(FIREBASE_AUTH,email,password)
}

function HandleRegister(email,password){
    return createUserWithEmailAndPassword(FIREBASE_AUTH,email,password)
}

function LogOut(){
    return signOut(FIREBASE_AUTH)
}

function GoogleSigin(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(FIREBASE_AUTH, googleAuthProvider);
}


useEffect(()=>{
  onAuthStateChanged(FIREBASE_AUTH,(currentUser)=>{
    setUser(currentUser);
  })
},[])

return(
    <LoginContext.Provider value={{HandleLogin,HandleRegister,user,LogOut,GoogleSigin}}>
        {children}
    </LoginContext.Provider>
)
}