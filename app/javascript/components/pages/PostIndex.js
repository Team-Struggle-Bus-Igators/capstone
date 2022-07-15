import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  CardGroup,
  Card,
  CardHeader,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap'


class PostIndex extends Component {
  constructor(props) {
    super(props)
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      openedUnit: null,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleClickUnit = (key) => {
    this.setState({openedUnit: key})
  }

  render() {
    const { posts } = this.props
    console.log("posts", posts)
    const filteredPosts = posts.filter(post => post.unit === this.state.openedUnit)
    console.log("openedunit", this.state.openedUnit)
    console.log("filtered", filteredPosts)
    return (
      <>
        <div className='unprotected__index__component'>
          <h2>Below you will find all of the help you need to get yourself off that struggle bus!</h2>
          <div className='DropdownButton'>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Select Unit
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Select Unit</DropdownItem>
              <DropdownItem onClick={() => this.handleClickUnit("Unit 1: JS Introduction")}>Unit 1: JS Introduction</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 2: JS Foundations")}>Unit 2: JS Foundations</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 3: React")}>Unit 3: React</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 4: Ruby")}>Unit 4: Ruby</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 5: Intro to Postgres and Ruby on Rails Models")}>Unit 5:Intro to Postgres and Ruby on Rails Models</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 6: Ruby on Rails")}>Unit 6: Ruby on Rails</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 7: Professional Development Week")}>Unit 7: Professional Development Week</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 8: Cat Tinder! Combining React and Rails")}>Unit 8: Cat Tinder! Combining React and Rails</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 9: React in Rails and Authentication")}>Unit 9: React in Rails and Authentication</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 10: Capstone Project, MVP")}>Unit 10: Capstone Project, MVP</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.handleClickUnit("Unit 11: Capstone Project, Icebox")}>Unit 11: Capstone Project, Icebox</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
          </div>
          {!this.state.openedUnit &&
            <>
              <h2>These are the most recent cards</h2>
              <div id="grid-index">
                {posts && 
                    posts.reverse().map((post, index) => {
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
              </div>
            </>
          }
          {this.state.openedUnit &&
          <>
              <h2>These are the posts for {this.state.openedUnit}</h2>
              {filteredPosts.reverse().map((post, index) => {
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
              })}
          </>
            }
        </div>
      </>
    )
  }
}

export default PostIndex