import React,{useState,useRef} from 'react';


const Test1=()=> {
    const nameRef=useRef();
    const [state,setState]=useState("");

    const fnChange=()=>{
        var name=nameRef.current.value
        alert(name)
    }

    const fnChange2=()=>{
        setState("nikhil")
    }

  return (
      <div>
    <div>{state}</div>
    <input type="text" ref={nameRef} onChange={fnChange}/>
    <button onClick={fnChange2}>click here</button>
    </div>
  )
}

export default Test1;