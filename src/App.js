import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { userAction } from "./Redux/actions/useraction";
import './App.css';
import User from "./users";

import {Test} from "./test";
import Test1 from "./test1";
import Test3 from "./test3";
import Test2 from './test2';
import Test4 from './test4';
import Test5 from './test5';
import Test6 from './test6';
import Reuse from './Reuse';


function App() {
  const dispatch=useDispatch();
  const userList= useSelector(state=>state.userList);
  const {loading,users,error}=userList;
  useEffect(()=>{
    dispatch(userAction())
  },[dispatch])
  return (
    <div style={{height:"621px" ,border: "2px solid red"}} className="App" >
       {/* <div style={{height:"50%"}} className="Test">Hello everyone</div> */}
        {/* <div class="col-sm-3"><Test/></div>
        <div class="col-sm-3"><Test1/></div>
        <div class="col-sm-3"><Test3/></div>
        <div class="col-sm-3"><Test2/></div>
        <div class="col-sm-3"><Test4/></div> */}
        {/* <div style={{height:"30%",background:"yellow"}}><Test5/></div>
        <div style={{height:"20%",width:"50%",background:"pink"}}><Test6/></div> */}
        {/* <div><Reuse/></div> */}
          <h1>Redux thunk example</h1>
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : 
          <User users={users}/>
        }
           
    </div>
  );
}

export default App;
