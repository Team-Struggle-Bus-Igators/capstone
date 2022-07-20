import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HomePagePhoto from '../assets/HomePagePhoto2.jpg'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: "loading..."
    }
  }

  componentDidMount = () => {
    fetch("https://zenquotes.io/api/random", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
    },
    })
    .then(response => {
      console.log(response.json()) })
    .then(payload => this.setState({quote: payload}))
    // .then((data) => {
    //   resolve(data ? this.setState({quote: JSON.parse(data)}): {})
    // })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <div className='home-component'>
          <h1>Welcome to Learnify</h1>
          <h2>{this.state.quote}</h2>
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
        <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
      </>
    )
  }
}

export default Home