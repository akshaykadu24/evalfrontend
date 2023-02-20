import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const[val,setVal] = useState({})

    const handleChange=(e)=>{
        const {name,value} = e.target
        setVal({...val,[name]:value})
    }
    const handleSubmit =()=>{
        fetch("https://drab-teal-piranha-gown.cyclic.app/user/register",{
            method:"POST",
            body:JSON.stringify(val),
            headers:{
                "Content-Type":"application/json",
            }

        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            alert("user registered")
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div>
        <h1>Signup</h1>
        <div>
            <input type="text" onChange={(e)=>{handleChange(e)}} name="name" id="" placeholder='name'/>
            <input type="text" onChange={(e)=>{handleChange(e)}} name="email" id="" placeholder='email'/>
            <input type="text" onChange={(e)=>{handleChange(e)}} name="gender" id="" placeholder='gender'/>
            <input type="password" onChange={(e)=>{handleChange(e)}} name="password" id="" placeholder='password'/>
            <input type="text" onChange={(e)=>{handleChange(e)}} name="age" id="" placeholder='age'/>
            <input type="text" onChange={(e)=>{handleChange(e)}} name="city" id="" placeholder='city'/>
            <button onClick={handleSubmit}>Signup</button>
        </div>
    </div>
  )
}

export default Signup