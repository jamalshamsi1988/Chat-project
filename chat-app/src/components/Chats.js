import React from 'react';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';

//https://chatengine.io/
import {ChatEngine} from 'react-chat-engine'; 

//componenet
import Navbar from './Navbar'
//Css
import styles from './Chats.module.css';


const Chats = () => {
    const navigate=useNavigate();

    const logoutHandeler=async ()=>{
    await auth.signOut();
    navigate("/");
}

  return (
    <div className={styles.container}>
      <Navbar logoutHandeler={logoutHandeler} />
      <ChatEngine 
      height="calc(100vh - 50)"
      ProjectID="d3dfa24f-efa7-452a-9c01-5b9037449584"
      userName="."
      userSecret="."
      
      />
    </div>
  )
}

export default Chats
