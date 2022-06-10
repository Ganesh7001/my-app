import React,{useState,useEffect} from 'react';



const API_URL="https://jsonplaceholder.typicode.com/albums"
const About = () => {
  const [state,setState]=useState([])
  

  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setState(data);
    })
   
  },[])
  return (
    <div><h1>Welcome to About</h1>
    {
      state.map((obj,i)=>(
         <h1 key={i}>{obj.title}</h1>
      ))
    }
    </div>
  )
}

export default About;