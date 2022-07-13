import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <>


        <h3 className='error'>Error 404: Not Found</h3>


        <div>
          <NavLink to="/">
            <button className="not_found"> Back Home</button>
          </NavLink>
        </div>
      </>
    )
  }
}
