import React, { Component } from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import Comments from '../components/Comments'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from "reactstrap";

class PostShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
      post: null,
    };
  }

  componentDidMount = () => {
    this.readPost();
  };

  readPost = () => {
    fetch(`/posts/${this.props.id}`)
      .then((response) => response.json())
      .then((postObj) => this.setState({ post: postObj }))
      .catch((err) => console.log("Post read errors", err));
  };

  handleDelete = () => {
    this.props.deletePost(this.props.id);
    this.setState({ deleted: true });
    alert("Post successfully deleted");
  };

  render() {
    if (this.state.post === null) {
      return null;
    }
    const { current_user, logged_in } = this.props;
    const { post } = this.state;
    const postUserId = post.user_id;
    let usersPost;
    logged_in ? (usersPost = current_user.id === postUserId) : null;
    if (this.state.deleted) {
      return <Redirect to="/postindex" />;
    }
    const postDate = new Date(post.updated_at)
    const postDateString = postDate.toDateString()
    return (
      <>
        <div className="show__component">
          <Card className="show__card" style={{ width: "90%", height: "90%" }}>
            <CardBody>
              <div className="card__title">
                <CardTitle id="title"> {post.topic}</CardTitle>
              </div>
              <CardSubtitle id="card__author">Name: {post.author}</CardSubtitle>
              <div className="cohort__date">
                <CardSubtitle id="card__cohort">
                  Cohort: {post.cohort}
                </CardSubtitle>
                <CardSubtitle id="card__date">{postDateString}</CardSubtitle>
              </div>
              <div className="image__content__button">
                <CardImg id="image" src={post.image} alt="" />
                <CardText id="content"> {post.content}</CardText>
                <NavLink to={"/"}>
                  <Button>Back Home</Button>
                </NavLink>
              </div>
              {logged_in && usersPost && (
                <div className="protected__show">
                  <Link
                    to={`/postedit/${post.id}`}
                    className="btn btn-warning"
                    id="edit"
                    color="warning"
                  >
                    Edit
                  </Link>
                  <Button onClick={this.handleDelete} id="delete" color="danger">
                    Delete
                  </Button>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
        {logged_in ?
          <Comments readPost={this.readPost} current_user={current_user} post={post} comments={post.comments.reverse()}/>
          :
          <h2 id="comment-section">Log in to view comments</h2>
        }
      </>
    );
  }
}
export default PostShow;
