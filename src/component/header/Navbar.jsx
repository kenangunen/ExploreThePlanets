import React from 'react'

const Navbar = () => {
  const hover = (e) => {
    console.log(e.target);

  }
  return (
    <nav>
      <ul className="menu-list" onMouseEnter={(e) => hover(e)}>
        <li className="home"><a href="/">home</a></li>
        <li className="planets"><a href="/">planets</a></li>
        <li className="about"><a href="/">about us</a></li>
        <li className="team"><a href="/">our team</a></li>
        <li className="contact"><a href="/">contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
