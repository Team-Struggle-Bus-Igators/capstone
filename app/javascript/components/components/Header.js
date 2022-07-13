import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

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
        <Navbar color="dark" dark expand="md" >
          <Nav className="me-auto" navbar >
            <NavLink className="nav-link" to="/">
              Learnify
            </NavLink>
            <NavLink className="nav-link" to="/postindex">
              <p>See Posts</p>
            </NavLink>
            
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
                <NavItem>
                  <a href={sign_out_route} className="nav-link">Sign Out</a>
                </NavItem>
              </div>
              }
              {!logged_in &&
              <div>
                <NavItem>
                  <a href={sign_in_route} className="nav-link">Sign In</a>
                </NavItem>
                <NavItem>
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
