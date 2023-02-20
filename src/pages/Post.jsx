import React, { useEffect, useState } from 'react'

const Post = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch("https://drab-teal-piranha-gown.cyclic.app/post",{
            headers:{
                "Authorization":JSON.parse(localStorage.getItem("token"))
            }            
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setData(res)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    const handleUpdate=()=>{
console.log("updating")
    }

    const handleDelete = (id)=>{
            fetch(`https://drab-teal-piranha-gown.cyclic.app/post/delete/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":JSON.parse(localStorage.getItem("token"))
                }            
            }).then(res=>res.json())
            .then(res=>{
                console.log(res)
                setData(res)
            }).catch(err=>{
                console.log(err)
            })
    }

  return (
    <div>
        <h1>Post</h1>
        <div>
            {
                data.map((el)=>{
                    return(
                        <div>
                            <h2>title:{el.title}</h2>
                            <p>body:{el.body}</p>
                            <p>device:{el.device}</p>
                            <p>comments :{el.no_if_comments}</p>
                            
                            <button onClick={handleUpdate()}>update</button>
                            <button onClick={()=>handleDelete(el._id)}>delete</button>

                        </div>

                    )
                })
            }
        </div>

    </div>
  )
}

export default Post