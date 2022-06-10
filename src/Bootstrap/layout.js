import React from 'react'
import Header from './Header';
import Card from './Card';
import "./layout.css";

const Layout = () => {
  return (
      <div>
    <div><Header/></div>
    <div className='card'><Card/></div>
    <span className='test'><button className="button btn-primary opacity-75 test1">Click here</button></span>
    </div>

  )
}

export default Layout;