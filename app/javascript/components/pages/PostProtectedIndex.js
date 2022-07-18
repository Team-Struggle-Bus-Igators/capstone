import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'

class PostProtectedIndex extends Component {
  render() {
    const { posts, current_user } = this.props
    const usersPosts = posts.filter(post => post.user_id === current_user.id)
    return (
      <>
        <h1>These are your current posts</h1>
          {usersPosts && usersPosts.map((post, index) => {
            return <Card id="index-card" key={index}>
                <CardBody id="card-body-index">
                <CardTitle>{post.topic}</CardTitle>
                <CardSubtitle>{post.unit}</CardSubtitle>
                <CardSubtitle>{post.post_type}</CardSubtitle>
                <CardSubtitle>{post.date}</CardSubtitle>
                <CardImg id="card-image" src={post.image} alt="Card image cap" />
                <NavLink id="info-button" to={`/postshow/${post.id}`}>
                    More Info
                </NavLink>
                </CardBody>
              </Card>
            })
          }
      </>
    )
  }
}


export default PostProtectedIndex