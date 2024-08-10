import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Styles from './Allbranch.module.css'
import BranchData from './BranchData'
export default function Allbranch() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={Styles.display}>
      <Sidebar></Sidebar>
      <BranchData/>
      </div>
      
    </div>
  )
}
