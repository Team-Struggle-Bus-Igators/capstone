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
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      unit1: false,
      unit2: false,
      unit3: false,
      unit4: false,
      unit5: false,
      unit6: false,
      unit7: false,
      unit8: false,
      unit9: false,
      unit10: false,
      unit11: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
    <>
      <div className='unprotected__index__component'>
        <h2>Below you will find all of the help you need to get yourself off that struggle bus!</h2>
        <div className='DropdownButton'>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Button Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Select Unit</DropdownItem>
            <DropdownItem onClick={() => this.setState({unit1: true})}>Unit 1: JS Introduction</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit2: true})}>Unit 2: JS Foundations</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit3: true})}>Unit 3: React</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit4: true})}>Unit 4: Ruby</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit5: true})}>Unit 5:Intro to Postgres and Ruby on Rails Models</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit6: true})}>Unit 6: Ruby on Rails</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit7: true})}>Unit 7: Professional Development Week</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit8: true})}>Unit 8: Cat Tinder! Combining React and Rails</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit9: true})}>Unit 9: React in Rails and Authentication</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit10: true})}>Unit 10: Capstone Project, MVP</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.setState({unit11: true})}>Unit 11: Capstone Project, Icebox</DropdownItem>
          </DropdownMenu>
          </ButtonDropdown>
        </div>
        <div className='index__cards'>
        <CardGroup>
          <Card     
          color="info"
          inverse
          >
            <CardHeader 
            className="text-center"
            >
              Topic
            </CardHeader>
            <CardImg
              alt="Default index image"
              src={Logo}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card Unit
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Type
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <NavLink to="/postshow">
                <Button>
                View
                </Button>
              </NavLink>
            </CardBody>
          </Card>
          <Card     
          color="info"
          inverse
          >
            <CardHeader
            className="text-center"
            >
              Topic
            </CardHeader>
            <CardImg
              alt="Default index image"
              src={Logo}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card Unit
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Type
              </CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to additional content.
              </CardText>
              <NavLink to="/postshow">
                <Button>
                View
                </Button>
              </NavLink>
            </CardBody>
          </Card>
          <Card
          color="info"
          inverse
          >
            <CardHeader
            className="text-center"
            >
              Topic
            </CardHeader>
            <CardImg
              alt="Default index image"
              src={Logo}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">
                Card Unit
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Type
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </CardText>
              <NavLink to="/postshow">
                <Button>
                View
                </Button>
              </NavLink>
            </CardBody>
          </Card>
        </CardGroup>
        </div>
          
      </div>
    </>
    )
  }
}


export default PostIndex