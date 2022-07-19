import React, { Component } from 'react'
import { NavLink, Redirect, Link } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText
} from 'reactstrap'

class PostShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false,
    }
  }

  handleDelete = () => {
    this.setState({ deleted: true })
    alert("Post successfully deleted")
  }

  render() {
    const { post, current_user, logged_in } = this.props
    const postUserId = post.user_id
    let usersPost
    logged_in ? usersPost = current_user.id === postUserId : null
    if (this.state.deleted) {
      return (<Redirect to="/postindex" />)
    }
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
        {logged_in && usersPost &&
          <div id="show-user-options">
            <Link to={`/postedit/${post.id}`} className="btn btn-warning" color="warning">Edit</Link>
            <Button onClick={this.handleDelete} color="danger">Delete</Button>
          </div>
        }
      </>
    )
  }
}
export default PostShow



