import React from 'react';
//Css
import styles from './Navbar.module.css';

const Navbar = ({logoutHandeler}) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        Chatgram
      </div>
      <div className={styles.logout} onClick={logoutHandeler}>
        Logout
      </div>
    </div>
  )
}

export default Navbar
