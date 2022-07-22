import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
} from "reactstrap"

class PostProtectedIndex extends Component {
  render() {
    const { posts, current_user } = this.props
    const usersPosts = posts.filter((post) => post.user_id === current_user.id)
    return (
      <div className="index">
        <h1>These are your current posts</h1>
        <div className="grid-index">
          <Row xs="3">
            {usersPosts &&
              usersPosts.map((post, index) => {
                const postDate = new Date(post.updated_at)
                const postDateString = postDate.toDateString()
                return (
                  <Card id="index-card" key={index}>
                    <CardBody id="card-body-index">
                      <CardTitle>{post.topic}</CardTitle>
                      <div id="card-subtitles">
                        <CardSubtitle>{post.unit}</CardSubtitle>
                        <CardSubtitle>{postDateString}</CardSubtitle>
                      </div>
                      <CardImg
                        id="card-image"
                        src={post.image}
                        alt="Card image cap"
                      />
                      <CardSubtitle>{post.post_type}</CardSubtitle>
                      <NavLink
                        className="info-button"
                        to={`/postshow/${post.id}`}
                      >
                        More Info
                      </NavLink>
                    </CardBody>
                  </Card>
                )
              })}
          </Row>
        </div>
      </div>
    )
  }
}

export default PostProtectedIndex
