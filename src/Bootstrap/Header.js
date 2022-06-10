import React from 'react'
import "./Header.css";
import { FcAcceptDatabase } from "react-icons/fc"
import { Link } from 'react-router-dom';


const Header = () => {
    const fnChange = () => {
        window.location.href="https://www.youtube.com/";
    }
    return (<div className='header'>
        <Link to="/about">About</Link>
        <Link to="/contact"><span >Contact</span></Link>
        <Link to="/Service"> <span >Services</span></Link>
        <Link to="/apidata"> <span >API_Data</span></Link>
        <span><button onClick={fnChange} type="button" className="btn btn-primary opacity-100">Primary</button></span>
        <span><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /></span>
        <span><FcAcceptDatabase style={{ color: 'green', fontSize: '50px' }} /></span>
    </div>
    )
}

export default Header;