import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      updatedPost: {
          post_type: "",
          image: "",
          unit: "",
          topic: "",
          author: "",
          content: "",
          date: "",
          cohort: "",
          link: "",
          user_id: ""
      }
    }
  }

  componentDidMount = () => {
    this.readPost()
  }

  readPost = () => {
    fetch(`/posts/${this.props.id}`)
    .then(response => response.json())
    .then(postObj => this.setState({ updatedPost: postObj }))
    .catch(err => console.log("Post read errors", err))
  }

  handleSubmit = () => {
    this.props.editPost(this.state.updatedPost, this.props.id)
    this.setState({submitted: true})
  }

  handleChange = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
    let { updatedPost } = this.state
    updatedPost[targetName] = targetValue
    this.setState({updatedPost: updatedPost})
  }

  render() {
    const { id } = this.props
    return (
      <>
        <h1>Update your post here!</h1>
        <Form>
          <FormGroup>
            <Label>
              Post Type
            </Label>
            <Input 
            onChange={this.handleEnumChange}
            name="post_type"
            type="text"
            value={this.state.updatedPost.post_type}
            disabled
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Unit
            </Label>
            <Input
            onChange={this.handleEnumChange}
            name="unit"
            type="text"
            value={this.state.updatedPost.unit}
            disabled
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Topic*
            </Label>
            <Input
            onChange={this.handleChange}
            name="topic"
            type="text"
            value={this.state.updatedPost.topic}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Name*
            </Label>
            <Input
            onChange={this.handleChange}
            name="author"
            type="text"
            value={this.state.updatedPost.author}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Date*
            </Label>
            <Input
            onChange={this.handleChange}
            name="date"
            type="date"
            value={this.state.updatedPost.date}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Cohort*
            </Label>
            <Input
            onChange={this.handleChange}
            name="cohort"
            type="text"
            value={this.state.updatedPost.cohort}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Content*
            </Label>
            <Input
            onChange={this.handleChange}
            name="content"
            type="text-area"
            value={this.state.updatedPost.content}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Link
            </Label>
            <Input
            onChange={this.handleChange}
            name="link"
            type="text"
            value={this.state.updatedPost.link}
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Image
            </Label>
            <Input
            onChange={this.handleChange}
            name="image"
            type="text"
            value={this.state.updatedPost.image}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>
            Update
          </Button>
          {this.state.submitted ? alert("Your post has been successfully updated") : null}
          {this.state.submitted ? <Redirect to={`/postshow/${id}`} /> : null}
        </Form>
      </>
    )
  }
}
