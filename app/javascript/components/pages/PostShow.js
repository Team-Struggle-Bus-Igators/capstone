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
    const { post } = this.props
    return (
      <>
        <Card className='index-cards' style={{ width: '60rem', height: '30rem' }}>
          <CardBody>
            <CardTitle className='card-title-sub'> {post.topic}</CardTitle>
            <CardSubtitle className='card-title-sub'>{post.date}</CardSubtitle>
            <CardSubtitle className='card-title-sub'> {post.cohort}</CardSubtitle>
            <CardImg id='card-image' src={post.image} alt="" />
            <CardText> {post.content}</CardText>
            <NavLink to={'/'}>
              <Button >Back Home</Button>
            </NavLink>
          </CardBody>
        </Card>

      </>
    )
  }
}
export default PostShow



