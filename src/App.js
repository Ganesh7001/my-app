import React,{useState,useEffect} from "react";
import { BrowserRouter ,Route , Routes } from "react-router-dom";
import Layout from "./Bootstrap/layout";
import Header from "./Bootstrap/Header";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Apidata from "./Apidata";
import { useSelector,useDispatch } from "react-redux";
import { userAction } from "./Redux/actions/useraction";
import './App.css';


// import {Test} from "./Tests/test";
// import Test1 from "./test1";
// import Test3 from "./test3";
// import Test2 from './test2';
// import Test4 from './test4';
// import Test5 from './Tests/test5';
// import Test6 from './test6';
// import Reuse from './Route/Reuse';


function App(){
  
  return (
    <div style={{height:"625px" ,border: "2px solid red"}} className="App" >
      {/* <div><Header/></div> */}

    
   
       {/* <div style={{height:"50%"}} className="Test">Hello everyone</div> */}
        {/* <div class="col-sm-3"><Test/></div>
        <div class="col-sm-3"><Test1/></div>
        <div class="col-sm-3"><Test3/></div>
        <div class="col-sm-3"><Test2/></div>
        <div class="col-sm-3"><Test4/></div> */}
        {/* <div style={{height:"30%",background:"yellow"}}><Test5/></div>
        <div style={{height:"20%",width:"50%",background:"pink"}}><Test6/></div> */}
        {/* <div><Reuse/></div> */}
        
           {/* <div><Layout/></div> */}
    <BrowserRouter>
    <Routes>
           
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/apidata" element={<Apidata/>}></Route>
          
        
      
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
