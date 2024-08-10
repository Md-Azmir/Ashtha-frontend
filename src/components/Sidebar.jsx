import React from 'react'
import styles from './Sidebar.module.css'
import { Link, NavLink } from 'react-router-dom'
export default function Sidebar() {
    const activeLinkStyle = {
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#1a73e8",
        padding: "10px",
        borderRadius: "15px",
      };
  return (
    <div className={styles.sidebar}>
        <div className={styles.container}>
      <div className={styles.sidedata}>Main Menu</div>
      <div className={styles.sidedata}><NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}> <i class="fa-solid fa-table-cells-large"></i> Dashboard </NavLink></div>
      <div className={styles.sidedata}><NavLink to="/Allcourse" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-chalkboard-user"></i> All course</NavLink></div>
      <div className={styles.sidedata}><NavLink to="/syllabus" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-graduation-cap"></i> Syllabus</NavLink></div>
      <div className={styles.sidedata}><NavLink to="/student" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-book"></i> Student</NavLink></div>
      <div className={styles.sidedata}><NavLink to="/certificate" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-certificate"></i> Certificate</NavLink></div>
      <div className={styles.sidedata}><NavLink to="/allfees" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-comments-dollar"></i> All Fees</NavLink></div>
      <div className={styles.sidedata}><NavLink to="/allbranch" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-code-branch"></i> All Branch</NavLink></div>
      <div className={styles.sidedata}><NavLink to="/blog" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-blog"></i> Blog</NavLink></div>
      <div className={styles.sidedata}><NavLink to="/placement" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-user-graduate"></i> Placement</NavLink></div>
      <div className={styles.sidedata}><NavLink to="/gallery" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-image"></i> Gallary</NavLink></div>
      <div className={styles.sidedata}><NavLink to="/video" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}><i class="fa-solid fa-photo-film"></i> Video</NavLink></div>
        </div>
    </div>
  )
}

