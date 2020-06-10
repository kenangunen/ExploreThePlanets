import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import "./header.scss"

const Header = () => {
  return (
    <div className="banner-section noselect">
      <Navbar />
      <Banner />
    </div>
  )
}

export default Header
