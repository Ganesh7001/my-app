import React,{useEffect, useState} from 'react'
import axios from 'axios';



const Apidata = () => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
        console.log(res)
        setPosts(res.data)
    }).then(err=>{
        console.log(err)
    })
    },[])
    


  return (
    <div>
         <h1>Api Data hvdns,zX</h1>
         <h1>hello </h1>
         <ul>
        {
            posts.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))
        }

</ul>
    </div>
  )
}

export default Apidata;