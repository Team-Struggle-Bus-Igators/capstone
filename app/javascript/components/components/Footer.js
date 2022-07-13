import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/aboutus">
              About us
            </NavLink>
          </li>
          <li>
            <p>© Learnify 2022</p>
          </li>
          <li>
            <NavLink to="/">
              Back Home
            </NavLink>
          </li>
        </ul>
      </>
    )
  }
}
