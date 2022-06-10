import React from "react";

const Test3=()=>{
    const data=[{"name":'ganesh',"place":"pune","mail":"ganesh@gmail.com"},{"name":'ganesh',"place":"pune","mail":"ganesh@gmail.com"}]
 return(
<div>
    {
        data.map(function(o,i){
            return (<span><b>{o.name}</b>" " 
            <b>{o.place}" "</b></span>
            )
        })
    }
   
</div>
 )
}

export default Test3;