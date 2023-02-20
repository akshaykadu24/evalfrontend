import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const[val,setVal] = useState({})

    const handleChange=(e)=>{
        const {name,value} = e.target
        setVal({...val,[name]:value})
    }
    const handleSubmit =()=>{
        fetch("https://drab-teal-piranha-gown.cyclic.app/user/login",{
            method:"POST",
            body:JSON.stringify(val),
            headers:{
                "Content-Type":"application/json",
            }

        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            localStorage.setItem("token",JSON.stringify(res.token))

            alert("login succesfully")
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div>
        <h1>Login</h1>
        <div>
            <input type="text" onChange={(e)=>{handleChange(e)}} name="email" id="" placeholder='email'/>
            <input type="password" onChange={(e)=>{handleChange(e)}} name="password" id="" placeholder='password'/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    </div>
  )
}

export default Login