import React, { createContext, useEffect,useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebaseConfiguration";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteItemAsync,setItemAsync } from "expo-secure-store";
import {collection, getDocs, updateDoc,deleteDoc,addDoc,doc } from "firebase/firestore";
import { ref,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { FIREBASE_db } from "../firebaseConfiguration";
import * as ImagePicker from 'expo-image-picker';


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
    } catch (error) {
        console.log(error)
    }
}

const DeleteItem = async(id) => {
    try {
        const deleteResponse = await deleteDoc(doc(FIREBASE_db,"todosList",id))
          await ReadItem();
    } catch (error) {
        console.log(error)
    }
}

const UpdateItem = async(id,isChecked) => {
    try {
        const updateResponse = await updateDoc(doc(FIREBASE_db,"todosList",id),{
            ischecked:isChecked
        })
          await ReadItem();
    } catch (error) {
        console.log(error)
    }
}

const DeleteAllItem = async() => {
    try {
        const deleteallResponse = await getDocs(collection(FIREBASE_db,"todosList"))
        deleteallResponse.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });
          console.log("dated");
          await ReadItem();
    } catch (error) {
        console.log(error)
    }
}

const pickImage = async (setIsLoading,setPhoto) => {
    setIsLoading(true)
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
        setPhoto(result.assets[0].uri);
        setInterval(()=>{
    setIsLoading(false)
     },2000)
      }else{
        setPhoto(null);
        setInterval(()=>{
            setIsLoading(false)
             },2000)
      }
}

const AddProduct = async(title,status,amount) => {
    try {
        const response = await addDoc(collection(FIREBASE_db,"products"),{
            title:title,
            status:status,
            amount:amount
        })
    } catch (error) {
        console.log(error)
    }
    ReadItem();
}

return(
    <LoginContext.Provider value={{
        HandleLogin,
        HandleRegister,
        LogOut,
        GoogleSigin,
        userToken,
        error, 
        SaveItem,
        ReadItem,
        todos,
        DeleteItem,
        UpdateItem,
        DeleteAllItem,
        pickImage,
        AddProduct
        }}>

        {children}

    </LoginContext.Provider>
)
}