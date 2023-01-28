import React,{useEffect,useState,createContext} from 'react';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

const AuthContext=createContext();

const AuthContextProvider = ({children}) => {

    const [loadin , setLoadin]=useState(true);
    const [user ,setUser]=useState(false);
    const navigate=useNavigate();

useEffect(()=>{
    auth.onAuthStateChanged(user =>{
        setUser(user);
        setLoadin(false);
        if(user) navigate("/chats")
    })
},[user , navigate])

  return (
    <AuthContext.Provider value={user}>
      {!loadin && children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
