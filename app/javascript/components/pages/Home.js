import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import Logo from '../assets/Learnify.svg'
import HomePage from '../assets/HomePage.jpg'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: "loading..."
    }
  }

  componentDidMount = () => {
    this.readQuote()
  }

  readQuote = () => {
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(payload =>this.setState({ quotes: payload }))
    .catch(errors => console.log(errors))
  }
  
  render() {
    const random = Math.floor(Math.random() * this.state.quotes.length)
    const rQuote = this.state.quotes[random]
    const {
      logged_in,
      sign_in_route,
    } = this.props
    return (
      <>
        <div className='home-component'>
          <img className='image-1' src={HomePage} alt="HomePagePhoto" />
          <div className='centered'>
            <h1 className='h1c'>Welcome to <img src={Logo} /></h1>
          </div>
          <div className='buttons'>
            <NavLink to="/postindex"><button className="bottom-left">Learnify Yourself</button></NavLink>
            {logged_in &&
              <NavLink to='/postnew'><button className="bottom-right" >Learnify Others</button></NavLink>
            }
            {!logged_in &&
              <a href={sign_in_route} className="bottom-right"> Learnify Others</a>
            }
          </div>
          <div className='home-body'>
            <p>We believe everyone who has gone through learn Academy can relate to the feelings of home fried brains! Which is what drove our team to come up with an application that can help future peers spend less time in the frying pan. With that goal in mind we created Learnify, A safe space where future, present, and past students can come to share their experiences, thoughts, and projects during each unit at Learn. This will help future students attending Learn better grasp the content for each unit and alleviate the feeling of being the only one lost in the sauce.</p>
          </div>
          <div id="quote">
            <h2>{rQuote.text}</h2>
            <h3>- {rQuote.author}</h3>
          </div>
        </div>
      </>
    )
  }
}

export default Home