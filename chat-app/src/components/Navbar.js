import React from 'react';
//Css
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        Chatgram
      </div>
      <div className={styles.logout}>
        Logout
      </div>
    </div>
  )
}

export default Navbar
