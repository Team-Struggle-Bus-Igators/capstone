import React, { Component } from 'react'
import logo from '../assets/Logo.svg'
import GithubLogo from '../assets/github-icon.svg'
import LinkedInLogo from '../assets/linkedin-logo.svg'
import Collin from '../assets/Collin-Headshot.jpg'
import {
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from 'reactstrap'


export default class AboutUs extends Component {
  render() {
    return (
      <>
        <div className='aboutus__component'>
          <img src={logo} alt="LFY logo" /> 
          <div className=''>
          <h1>About The Team!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='aboutus__cards'>
          <CardGroup>
            <Card
              style={{
                width: '18rem',
                color: 'black'
              }}
            >
              <CardImg
                alt="Team member head shot"
                src={Collin}
              />
              <CardBody>
                <CardTitle tag="h5">
                  Collin O'Connor
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  About Me!
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <a href="https://github.com/CJOcode" target="_blank">
                  <img 
                  alt="github logo"
                  src={GithubLogo}
                  />
                </a>
                <a href="https://www.linkedin.com/in/collin-o-connor-programmer/" target="_blank">
                  <img
                  alt="linkedin logo"
                  src={LinkedInLogo}
                  />
                </a>
              </CardBody>
            </Card> 
            <Card
              style={{
                width: '18rem',
                color: 'black'
              }}
            >
              <CardImg
                alt="Team member head shot"
                src="https://picsum.photos/300/200"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Logan Ramos
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  About Me!
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <a href="https://github.com/Renzlawr" target="_blank">
                  <img 
                  alt="github logo"
                  src={GithubLogo}
                  />
                </a>
                <a href="https://www.linkedin.com/in/loganramos/" target="_blank">
                  <img
                  alt="linkedin logo"
                  src={LinkedInLogo}
                  />
                </a>
              </CardBody>
            </Card> 
            <Card
              style={{
                width: '18rem',
                color: 'black'
              }}
            >
              <CardImg
                alt="Team member head shot"
                src="https://picsum.photos/300/200"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Geovanna Perez
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6">
                  About Me!
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <a href="https://github.com/Geovannapg12" target="_blank">
                  <img 
                  alt="github logo"
                  src={GithubLogo}
                  />
                </a>
                <a href="https://www.linkedin.com/in/geovanna-perez-38725123b/" target="_blank">
                  <img
                  alt="linkedin logo"
                  src={LinkedInLogo}
                  />
                </a>
              </CardBody>
            </Card> 
          </CardGroup>
          </div>
        </div>
      </>
    )
  }
}
