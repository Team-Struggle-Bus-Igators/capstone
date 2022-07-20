import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
} from "reactstrap"

class PostIndex extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      openedUnit: null,
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  handleClickUnit = (key) => {
    this.setState({ openedUnit: key })
  }

  render() {
    const { posts } = this.props
    const filteredPosts = posts.filter(
      (post) => post.unit === this.state.openedUnit
    )
    return (
      <>
        <div className="unprotected-index">
          <h1>
            Below you will find all of the help you need to get yourself off
            that struggle bus!
          </h1>
          <div className="dropdown-button">
            <ButtonDropdown
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle caret>
                {!this.state.openedUnit ? "Select Unit" : this.state.openedUnit}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Select Unit</DropdownItem>
                <DropdownItem
                  onClick={() =>
                    this.handleClickUnit("Unit 1: JS Introduction")
                  }
                >
                  Unit 1: JS Introduction
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => this.handleClickUnit("Unit 2: JS Foundations")}
                >
                  Unit 2: JS Foundations
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => this.handleClickUnit("Unit 3: React")}
                >
                  Unit 3: React
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => this.handleClickUnit("Unit 4: Ruby")}
                >
                  Unit 4: Ruby
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() =>
                    this.handleClickUnit(
                      "Unit 5: Intro to Postgres and Ruby on Rails Models"
                    )
                  }
                >
                  Unit 5:Intro to Postgres and Ruby on Rails Models
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => this.handleClickUnit("Unit 6: Ruby on Rails")}
                >
                  Unit 6: Ruby on Rails
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() =>
                    this.handleClickUnit(
                      "Unit 7: Professional Development Week"
                    )
                  }
                >
                  Unit 7: Professional Development Week
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() =>
                    this.handleClickUnit(
                      "Unit 8: Cat Tinder! Combining React and Rails"
                    )
                  }
                >
                  Unit 8: Cat Tinder! Combining React and Rails
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() =>
                    this.handleClickUnit(
                      "Unit 9: React in Rails and Authentication"
                    )
                  }
                >
                  Unit 9: React in Rails and Authentication
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() =>
                    this.handleClickUnit("Unit 10: Capstone Project, MVP")
                  }
                >
                  Unit 10: Capstone Project, MVP
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() =>
                    this.handleClickUnit("Unit 11: Capstone Project, Icebox")
                  }
                >
                  Unit 11: Capstone Project, Icebox
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          {!this.state.openedUnit && (
            <>
              <h2>These are the most recent posts</h2>
              <div className="grid-index">
                {posts && (
                  <Row xs="3">
                    {posts.slice(0, 6).map((post, index) => {
                      return (
                        <Card id="index-card" key={index}>
                          <CardBody id="card-body-index">
                            <CardTitle>{post.topic}</CardTitle>
                            <div id="card-subtitles">
                              <CardSubtitle>{post.unit}</CardSubtitle>
                              <CardSubtitle>{post.date}</CardSubtitle>
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
                )}
              </div>
            </>
          )}
          {this.state.openedUnit && (
            <>
              <h2>These are the posts for {this.state.openedUnit}</h2>
              <div className="grid-index">
                <Row xs="3">
                {filteredPosts.map((post, index) => {
                  return (
                    <Card className="index-card" key={index}>
                      <CardBody className="card-body-index">
                        <CardTitle>{post.topic}</CardTitle>
                        <div className="card-subtitles">
                          <CardSubtitle>{post.unit}</CardSubtitle>
                          <CardSubtitle>{post.date}</CardSubtitle>
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
            </>
          )}
        </div>
      </>
    )
  }
}

export default PostIndex
