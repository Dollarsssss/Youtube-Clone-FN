import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <section id='nav'>
      <div className='brand'>
        <div className='ham'>
          <img src="https://via.placeholder.com/24x24" alt="" />
        </div>
        <div className='logo'>
          <img src="https://via.placeholder.com/97x20" alt="" />
        </div>
      </div>
      <div className='center'>
        <div className='search'>
          <div className='search-box'>
            <input className="search-input" type="text" />
          </div>
          <div className='btn'>
            Q
          </div>
          <div className='voice'>

          </div>
        </div>
      </div>
      <div className='end'>
        <div className='end-item'>
          <img src="https://via.placeholder.com/24x24" alt="" />
        </div>
        <div className='end-item'>
        <img src="https://via.placeholder.com/24x24" alt="" />
        </div>
        <div className='end-item'>
          <img src="https://via.placeholder.com/24x24" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Nav