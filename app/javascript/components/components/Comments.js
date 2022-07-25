import React, { Component } from "react"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap"

export default class Comments extends Component {
  constructor(props) {
    super(props)
    let { current_user, post } = this.props
    this.state = {
      comment: {
        post_id: post.id,
        user_id: current_user.id,
      },
    }
  }

  handleSubmit = () => {
    alert("Comment Posted")
    this.createComment(this.state.comment)
  }

  createComment = (newComment) => {
    fetch("/comments", {
      body: JSON.stringify(newComment),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.props.readPost())
      .catch((err) => console.log("Comment create errors", err))
  }

  handleDelete = (id) => {
    alert("Comment Deleted")
    this.deleteComment(id)
  }

  deleteComment = (id) => {
    fetch(`/comments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.props.readPost())
    .catch(errors => console.log("delete errors:", errors))
  }

  handleChange = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
    let { comment } = this.state
    comment[targetName] = targetValue
    this.setState({ comment: comment })
  }

  render() {
    const { comments } = this.props
    return (
      <div id="comment-form-container">
        <h1>Comments:</h1>
        <Form id="comment-form">
          <FormGroup>
            <Label>Comment</Label>
            <Input
              id="remark"
              name="remark"
              placeholder="Enter your comment here"
              onChange={this.handleChange}
            />
            <Button color="success" onClick={this.handleSubmit}>Comment</Button>
          </FormGroup>
        </Form>
        {comments.map((comment, index) => {
          const { current_user } = this.props
          const user = current_user.id === comment.user_id
          return (
            <Card id="comment-card" key={index} className="my-2" width="100%">
              <CardBody id="card-body">
                <CardTitle tag="h5">
                  Posted by User: {comment.user_id}
                </CardTitle>
                <CardText>{comment.remark}</CardText>
                {user && 
                  <div id="button-container">
                    <Button onClick={() => this.handleDelete(comment.id)} color="danger">Delete</Button>
                  </div>
                }
              </CardBody>
            </Card>
          )
        })}
      </div>
    )
  }
}
