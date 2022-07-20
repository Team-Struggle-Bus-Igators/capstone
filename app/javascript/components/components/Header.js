import React, { Component } from "react"
import { Navbar, Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import Logo from "../assets/Learnify.svg"

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props
    return (
      <>
        <Navbar>
          <div id="nav-container">
            <NavLink to="/">
              <img src={Logo} />
            </NavLink>
            <NavLink id ="blue" className="nav-link" to="/postindex">
              See Posts
            </NavLink>
          </div>
          <Nav navbar>
              {logged_in && (
                <>
                  <NavLink className="nav-link" to="/postnew">
                    New Post
                  </NavLink>
                  <NavLink className="nav-link" to="/postprotectedindex">
                    My Posts
                  </NavLink>
                  <NavItem className="nav-link">
                    {current_user.email}
                  </NavItem>
                  <NavItem>
                    <a href={sign_out_route} className="nav-link">
                      Sign Out
                    </a>
                  </NavItem>
                </>
              )}
              {!logged_in && (
                <>
                  <NavItem>
                    <a href={sign_in_route} className="nav-link">
                      Sign In
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href={new_user_route} className="nav-link">
                      Sign Up
                    </a>
                  </NavItem>
                </>
              )}
          </Nav>
        </Navbar>
      </>
    )
  }
}
