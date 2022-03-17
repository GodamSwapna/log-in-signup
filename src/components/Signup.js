import React,{useState} from 'react'
// import { useState } from 'react/cjs/react.production.min'

function Signup() {
  const [userregistation,setUserRigestation]=useState({username:"",
  lastname:"",
  email:"",
  password:""})

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value
    setUserRigestation({...userregistation,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      <div>
        <label>FullNAme</label>
        <input type="text" name="username" value={userregistation.username} id="username"  onChange={handleInput}/>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastname" value={userregistation.lastname} id="lastname" onChange={handleInput}/>
      </div>
      <div>
        <label>Email</label>
        <input type="text" name="email" value={userregistation.email} id="email" onChange={handleInput}/>
      </div>
      <div>
        <label>Password</label>
        <input type="text" name="password" value={userregistation.password} id="password" onChange={handleInput}/>
      </div>
      <button type="submit">Registration</button>
      </form>
      
    </div>
  )
}

export default Signup