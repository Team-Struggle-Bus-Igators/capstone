import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import Logo from '../assets/Learnify.svg'

export default class PostNew extends Component {
  constructor(props) {
    super(props)
    let { current_user } = this.props
    this.state = {
      submitted: false,
      post: {
        user_id: current_user.id
      }
    }
  }

  handleSubmit = () => {
    this.props.createPost(this.state.post)
    this.setState({ submitted: true })
  }

  handleChange = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.value
    let { post } = this.state
    post[targetName] = targetValue
    this.setState({ post: post })
  }

  handleEnumChange = (e) => {
    let targetName = e.target.name
    let targetValue = e.target.selectedIndex
    let { post } = this.state
    post[targetName] = targetValue
    this.setState({ post: post })
  }

  render() {
    return (
      <>
        <div className='postnew-body'>
          <h1 className='postnew-h1'> <img src={Logo} /> Your Tech Peers here!</h1>
          <Form>
            <FormGroup>
              <Label className='label-color'>
                Post Type*
              </Label>
              <Input
                onChange={this.handleEnumChange}
                name="post_type"
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
              <Label className='label-color'>
                Unit*
              </Label>
              <Input
                onChange={this.handleEnumChange}
                name="unit"
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
              <Label className='label-color'>
                Topic*
              </Label>
              <Input
                onChange={this.handleChange}
                name="topic"
                type="text"
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
              />
            </FormGroup>
            <div className='postnew-button'>
              <Button id='button-color' onClick={this.handleSubmit}>
                Submit
              </Button>
            </div>
            {this.state.submitted ? alert("Your post has been successfully submitted") : null}
            {this.state.submitted ? <Redirect to={"/postindex"} /> : null}
          </Form>
        </div>
      </>
    )
  }
}