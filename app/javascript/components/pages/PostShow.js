import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class PostShow extends Component {
  render() {
    return (
      <>
        <Card className='index-cards' style={{ width: '60rem', height: '30rem' }}>
          <CardBody>
            <CardTitle className='card-title-sub'> Title</CardTitle>
            <CardSubtitle className='card-title-sub'> date</CardSubtitle>
            <CardSubtitle className='card-title-sub'> Cohort</CardSubtitle>
            <CardText> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</CardText>
            <NavLink to={'/'}>
              <Button >Back Home??</Button>
            </NavLink>
          </CardBody>
        </Card>

      </>
    )
  }
}
export default PostShow



