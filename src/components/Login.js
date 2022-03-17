import React,{useState} from 'react'

function Login() {
    const [userInfo,setUserinfo]=useState({email:"",password:""})

    const eventHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setUserinfo({...userInfo,[name]:value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={submitForm}>
            <div>
                <label>Email:</label>
                <input type="email" name="email" id="email" value={userInfo.email} onChange={eventHandler}/>
            </div>
            <div>
                <label>Password</label>
                <input type="text" name="password" id="password" value={userInfo.password} onChange={eventHandler}/>
            </div>

            <button type="submit">LogIn</button>
        </form>
    </div>
  )
}

export default Login