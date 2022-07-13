import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HomePagePhoto from '../assets/HomePagePhoto2.jpg'


class Home extends Component {
  render() {
    return (
      <>
        <div className='home__component'>
          <h1>Welcome to Learnify</h1>
          <img src={HomePagePhoto} alt="HomePagePhoto"/>
          <div className='call__to__action'>
            <ul>
              <NavLink to="/postindex"><button>Learnify Yourself</button></NavLink>
              <NavLink to="/postnew"><button >Learnify Others</button></NavLink>
            </ul>
          </div>
          <div className='body'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>


        </div>
      </>
    )
  }
}

export default Home