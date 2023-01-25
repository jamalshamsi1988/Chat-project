import React from 'react';

//icons
import google from '../assets/google.svg';
//CSS
import styles from '../components/Login.module.css';

const Login = () => {
  return (
    <div className={styles.loginPage} >
      <div className={styles.loginCard}>
        <h2>Welcome to Chatgram!</h2>
      
        <div className={styles.button}>
            <img src={google} alt="login"/>Sign in with Google
        </div>
        </div>
    </div>
  )
}

export default Login;
