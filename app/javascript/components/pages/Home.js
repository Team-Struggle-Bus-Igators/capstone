import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HomePagePhoto from '../assets/HomePagePhoto2.jpg'


class Home extends Component {
  render() {
    return (
      <>
        <div className='home-component'>
          <h1>Welcome to Learnify</h1>
          <img src={HomePagePhoto} alt="HomePagePhoto" />
          <div>
            <ul>
              <NavLink to="/postindex"><button className="call-to-action">Learnify Yourself</button></NavLink>
              <NavLink to="/postnew"><button className="call-to-action" >Learnify Others</button></NavLink>
            </ul>
          </div>
          <div className='home-body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </>
    )
  }
}

export default Home