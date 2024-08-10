import React from 'react'
import styles from './BranchData.module.css'
import { useState } from 'react'
import axios from 'axios';
export default function BranchData() {
    const [addBranch,setAddBranch]=useState(false);
    const [showBranch,setShowBranch]=useState(true);
    const [branchName,setBranchName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    function AddBranch(){
        setAddBranch(!addBranch)
        setShowBranch(!showBranch)
    }
    function handleChange(e){
      if(e.target.id===branchName){
        setBranchName(e.target.value)
      }
      else if(e.target.id===email){
        setEmail(e.target.value);
      }
      else if(e.target.id===password){
        setPassword(e.target.value);
      }
      else if(e.target.id===address){
        setAddress(e.target.value);
      }
    }
    async function handleSubmit(){
      try{
        const response=await axios.post('http://localhost:8000/addBranch',{branchName,email,password,address},{headers:{"Content-Type":"application/json"}})
        console.log(response.data)
      }catch(error){
        console.log(error);
      }
    }
    
  return (
    <div className={styles.container}>
      <div>
      <div className={styles.name}>
        <h2>Branch</h2>
        <h5>All Branch</h5>
      </div>
      {showBranch&&<div className={styles.databox}>
        <div className={styles.lable}>
        <h2>Branch</h2>
        <button onClick={AddBranch}><i class="fa-solid fa-plus"></i></button>
        </div>
        {/* <ul className={styles.lable1}>
            <li>Photo</li>
            <li>Name</li>
            <li>Email</li>
            <li>password</li>
            <li>Address</li>
            <li>Action</li>
        </ul> */}
        <table>
            <tr>
                <th className={styles.photo}> Photo</th>
                <th className={styles.names}>Name</th>
                <th className={styles.email}>Email</th>
                <th className={styles.password}>Password</th>
                <th className={styles.address}>Address</th>
                <th className={styles.action}>Action</th>
            </tr>
            
        </table> 
      </div>}
      </div>
      {addBranch&&
        <div className={styles.databox}>
        
        <div className={styles.lable}>
        <h2>Branch</h2>
        <button onClick={AddBranch} className={styles.backBtn}>Back</button>
        </div>
        <form action="" onSubmit={handleSubmit}>
            
                
            <label for="branchName" > Branch Name
                <input type="text" placeholder='Enter Branch name' id='branchName' onChange={handleChange}/>
            </label>
            <label for="email"> Email
                <input type="text" id='email' placeholder='email'  onChange={handleChange}/>
            </label>
            <label for="password"> Password
                <input type="text" id='password' placeholder='enter password'  onChange={handleChange}/>
            </label>
            <label for="address">Address
            <textarea id='address' onChange={handleChange}></textarea>
            </label>
            
            <label for="photo">Upload Branch Photo
            <input type="file" id="photo" className={styles.file}/>
            </label>
            <button>Submit</button>
        </form>
        </div>}
    </div>
  )
}
