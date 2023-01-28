import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

//icons
import google from '../assets/google.svg';
//CSS
import styles from '../components/Login.module.css';

const Login = () => {
  return (
    <div className={styles.loginPage} >
      <div className={styles.loginCard}>
        <h2>Welcome to Chatgram!</h2>
      
        <div 
        onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        className={styles.button}>
            <img src={google} alt="login"/>Sign in with Google
        </div>
        </div>
    </div>
  )
}

export default Login;
