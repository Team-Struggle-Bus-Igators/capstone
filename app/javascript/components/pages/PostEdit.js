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
    this.props.editPost(this.state.updatedPost, this.props.post.id)
    this.setState({ submitted: true })
  }

  handleChange = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
    let { updatedPost } = this.state
    updatedPost[targetName] = targetValue
    this.setState({ updatedPost: updatedPost })
  }

  render() {
    const { id } = this.props
    return (
      <>
        <div className='postnew-body'>
          <h1 id='h1edit'>Update Your Post Here!</h1>
          <Form>
            <FormGroup>
              <Label className='label-color'>
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
              <Label className='label-color'>
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
              <Label className='label-color'>
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
              <Label className='label-color'>
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
              <Label className='label-color'>
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
              <Label className='label-color'>
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
              <Label className='label-color'>
                Content*
              </Label>
              <Input className='form-control1'
                onChange={this.handleChange}
                name="content"
                type="text-area"
                value={this.state.updatedPost.content}
              />
            </FormGroup>
            <FormGroup>
              <Label className='label-color'>
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
              <Label className='label-color'>
                Image
              </Label>
              <Input
                onChange={this.handleChange}
                name="image"
                type="text"
                value={this.state.updatedPost.image}
              />
            </FormGroup>
            <div className='postnew-button'>
              <Button id='button-color' onClick={this.handleSubmit}>
                Update
              </Button>
            </div>
            {this.state.submitted ? alert("Your post has been successfully updated") : null}
            {this.state.submitted ? <Redirect to={`/postshow/${post.id}`} /> : null}
          </Form>
        </div>
      </>
    )
  }
}
