import React from 'react'
import png from "../assets/img/pngegg.png"

function Navbar( ) {

  return (
    <nav className='nav-container'>
      <div className='nav-list-container'>
        <a href="http://localhost:3000/">
          <img src={png} alt='anime'></img>
        </a>
        <div className='list-container'>
          <ul className='list'>
            <li><a href="http://localhost:3000/">Inicio</a></li>
            <li><a href="http://localhost:3000/">About</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar