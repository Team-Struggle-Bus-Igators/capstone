import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className='footer'>
          <NavLink className='about-us' to="/aboutus">
            About us
          </NavLink>
          <div className='footer-name'>
            <p>© Learnify 2022</p>
          </div>
          <NavLink className='back-home' to="/">
            Back Home
          </NavLink>
        </div>
      </>
    )
  }
}
