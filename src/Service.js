import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { userAction } from "./Redux/actions/useraction";
import User from "./Redux/users";


const Service = () => {
  const dispatch=useDispatch();
  const userList= useSelector(state=>state.userList);
  const {loading,users,error}=userList;
  useEffect(()=>{
    dispatch(userAction())
  },[dispatch])

  
  return (
    <div><h1>Welcome to service</h1>
       <h1>Redux thunk</h1>
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : 
          <User users={users}/>
        } 
    
    </div>
  )
}

export default Service;