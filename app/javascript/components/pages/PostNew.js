import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

export default class PostNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      post: {
        user_id: this.props.user.id
      }
    }
  }

  handleSubmit = () => {
    this.setState({submitted: true})
  }

  handleChange = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
    let { post } = this.state
    post[targetName] = targetValue
    this.setState({post: post})
  }

  render() {
    console.log(this.state.post.user_id)
    console.log(this.state.post)
    console.log(this.props.user)
    return (
      <>
        <h1>Learnify your tech peers here!</h1>
        <Form>
          <FormGroup>
            <Label>
              Type*
            </Label>
            <Input 
            onChange={this.handleChange}
            name="type"
            type="select"
            >
              <option>
                Select Type
              </option>
              <option>
                Project
              </option>
              <option>
                Notes/Tips
              </option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>
              Unit*
            </Label>
            <Input
            onChange={this.handleChange}
            name="Unit"
            type="select"
            >
              <option>
                Select Unit
              </option>
              <option>
                Unit 1: JS Introduction
              </option>
              <option>
                Unit 2: JS Foundations
              </option>
              <option>
                Unit 3: React
              </option>
              <option>
                Unit 4: Ruby
              </option>
              <option>
                Unit 5:Intro to Postgres and Ruby on Rails Models
              </option>
              <option>
                Unit 6: Ruby on Rails
              </option>
              <option>
                Unit 7: Professional Development Week
              </option>
              <option>
                Unit 8: Cat Tinder! Combining React and Rails
              </option>
              <option>
                Unit 9: React in Rails and Authentication
              </option>
              <option>
                Unit 10: Capstone Project, MVP
              </option>
              <option>
                Unit 11: Capstone Project, Icebox
              </option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>
              Topic*
            </Label>
            <Input
            onChange={this.handleChange}
            name="topic"
            type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label>
              Name*
            </Label>
            <Input
            onChange={this.handleChange}
            name="name"
            type="text"
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
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>
            Submit
          </Button>
          {this.state.submitted ? alert("Your post has been successfully submitted") : null}
          {this.state.submitted ? <Redirect to={"/postindex"} /> : null}
        </Form>
      </>
    )
  }
}