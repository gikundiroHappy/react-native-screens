import React, { createContext, useEffect,useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfiguration";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteItemAsync,setItemAsync } from "expo-secure-store";
import {collection, getDocs, updateDoc,deleteDoc,addDoc,doc } from "firebase/firestore";
import { FIREBASE_db } from "../firebaseConfiguration";


export const LoginContext = createContext();

export function ThemeProvidercontext({children}){

    const [userToken,setUserToken] = useState(null)
    const [error,setError] = useState('')

    const [todos, setTodos] = useState([])
    

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


const SaveItem = async(item) => {
    try {
        const response = await addDoc(collection(FIREBASE_db,"todosList"),{
            item:item,
            ischecked: false,
        })
          console.log(response);
    } catch (error) {
        console.log(error)
    }
    ReadItem();
}

const ReadItem = async() => {
    try {
        const readResponse = await getDocs(collection(FIREBASE_db,"todosList"))
        setTodos(readResponse.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id
        })))
          console.log(readResponse);
    } catch (error) {
        console.log(error)
    }
}

const DeleteItem = async(id) => {
    try {
        const deleteResponse = await deleteDoc(doc(FIREBASE_db,"todosList",id))
          console.log(deleteResponse);
          console.log("deleted");
          await ReadItem();
    } catch (error) {
        console.log(error)
    }
}

const UpdateItem = async(id) => {
    try {
        const updateResponse = await updateDoc(doc(FIREBASE_db,"todosList",id),{
            ischecked:ischecked
        })
          console.log(updateResponse);
          console.log("deleted");
          await ReadItem();
    } catch (error) {
        console.log(error)
    }
}

return(
    <LoginContext.Provider value={{HandleLogin,HandleRegister,LogOut,GoogleSigin,userToken,error, SaveItem,ReadItem,todos,DeleteItem,UpdateItem}}>
        {children}
    </LoginContext.Provider>
)
}