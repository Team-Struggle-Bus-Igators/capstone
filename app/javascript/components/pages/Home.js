import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Learnify.svg'
import HomePage from '../assets/HomePage.jpg'
import { NavItem } from 'reactstrap'


class Home extends Component {
  render() {
    const {
      logged_in,
      new_user_route,
      sign_in_route,
    } = this.props
    return (
      <>
        <div className='home-component'>
          <img className='image-1' src={HomePage} alt="HomePagePhoto" />
          <div className='centered'>
            <h1 className='h1c'>Welcome to <img src={Logo} /></h1>
          </div>
          <div>
            <ul className='buttons'>
              <NavLink to="/postindex"><button className="bottom-left">Learnify Yourself</button></NavLink>
              {logged_in &&
                <NavLink to='/postnew'><button className="bottom-right" >Learnify Others</button></NavLink>
              }
              {!logged_in &&
                <a href={sign_in_route} className="bottom-right"> Learnify Others</a>
              }
            </ul>
          </div>
          <div className='home-body'>
            <p>We believe everyone who has gone through learn Academy can relate to the feelings of home fried brains! Which is what drove our team to come up with an application that can help future peers spend less time in the frying pan. With that goal in mind we created Learnify, A safe space where future, present, and past students can come to share their experiences, thoughts, and projects during each unit at Learn. This will help future students attending Learn better grasp the content for each unit and alleviate the feeling of being the only one lost in the sauce.</p>
          </div>
        </div>
      </>
    )
  }
}

export default Home