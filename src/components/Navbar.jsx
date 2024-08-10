import React from 'react'
import astha from '../assest/Astha.png'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.astha}><img src={astha} alt="sorry" width={130}/></div>
      <div className={styles.administor}>Administrator</div>
    </div>
  )
}
