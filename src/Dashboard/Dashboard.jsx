import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styles from './Dashboard.module.css'
import DashboardData from './DashboardData'
export default function Dashboard() {
  return (
    <div>
        <Navbar></Navbar>
        <div className={styles.d}>
        <Sidebar></Sidebar>
        <DashboardData></DashboardData>
        
        </div>
        
    </div>
  )
}
