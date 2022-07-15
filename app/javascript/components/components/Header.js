
import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Learnify.svg'

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <>

        <Navbar id='nav-container'>
          <Nav navbar >
            <NavLink to="/">
              <img src={Logo} />
            </NavLink>
            <div className='link-container'>
              <NavLink className="nav-links" to="/postindex">
                <p id='post-link'>See Posts</p>
              </NavLink>
            </div>
            <Nav navbar >
              {logged_in &&
                <div>
                  <NavLink className="nav-link" to="/postnew">
                    New Post
                  </NavLink>
                  <NavLink className="nav-link" to="/postprotectedindex">
                    My Posts
                  </NavLink>
                  <NavItem className="nav-link">
                    <p>{current_user.email}</p>
                  </NavItem>
                  <div>
                    <NavItem>
                      <a href={sign_out_route} className="nav-link">Sign Out</a>
                    </NavItem>
                  </div>
                </div>
              }
              {!logged_in &&
                <div className='link-container'>
                  <NavItem className='navigation-link'>
                    <a href={sign_in_route} className="nav-link">Sign In</a>
                  </NavItem>
                  <NavItem className='navigation-link'>
                    <a href={new_user_route} className="nav-link">Sign Up</a>
                  </NavItem>
                </div>
              }
            </Nav>
          </Nav>
        </Navbar>
      </>
    )
  }
}
