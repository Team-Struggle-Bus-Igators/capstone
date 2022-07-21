import React, { Component } from "react";
import logo from "../assets/Logo.svg";
import GithubLogo from "../assets/github-icon.svg";
import LinkedInLogo from "../assets/linkedin-logo.svg";
import Collin from "../assets/Collin-Headshot.jpg";
import Geo from "../assets/Geo-Headshot.jpeg"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Container,
} from "reactstrap";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="aboutus__component">
          <div className="LFYlogo">
            <img src={logo} alt="LFY logo" />
          </div>
          <div className="header-p">
            <h1>Meet the Team!</h1>
          </div>
          <div className="aboutus__cards">
            <div className="card__div">
              <Card
                style={{
                  width: "21rem",
                  color: "black",
                }}
              >
                <CardImg
                  className="headshot"
                  alt="Team member head shot"
                  src={Collin}
                />

                <CardBody>
                  <CardTitle tag="h5">Collin O'Connor</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    About Me!
                  </CardSubtitle>
                  <CardText>
                    Hi, I am a full stack web developer with front-end and backend experience including technologies such as react, rails, javascript and ruby. My prior work history includes military service of over 4 years and hospitality in the restaurant industry. Working in a team environment is something I enjoy as it makes work extra fun when collaborating with others. Some hobbies of mine are traveling, riding motorcycles and physical fitness. Thank you for visiting our page!
                  </CardText>
                  <div className="socials__div">
                    <a
                      href="https://github.com/CJOcode"
                      target="_blank"
                    >
                      <img className="github__icon" alt="github logo" src={GithubLogo} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/collin-o-connor-programmer/"
                      target="_blank"
                    >
                      <img className="linkedin__icon" alt="linkedin logo" src={LinkedInLogo} />
                    </a>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="card__div">
              <Card
                style={{
                  width: "21rem",
                  color: "black",
                }}
              >
                <CardImg
                  className="headshot"
                  alt="Team member head shot"
                  src="https://picsum.photos/300/200"
                />
                <CardBody>
                  <CardTitle tag="h5">Logan Ramos</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    About Me!
                  </CardSubtitle>
                  <CardText>
                    Hello, my name is Logan Ramos. I am currently a full stack software engineer who primarily works with React and Rails on a daily basis. I enjoy learning about new technologies and what we can do with them. In my free time I primarily play video games which is what led me into this field of work, I always wanted to know what happened behind the scenes.
                  </CardText>
                  <div className="socials__div">
                    <a
                      href="https://github.com/Renzlawr"
                      target="_blank"
                    >
                      <img className="github__icon" alt="github logo" src={GithubLogo} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/loganramos/"
                      target="_blank"
                    >
                      <img className="linkedin__icon" alt="linkedin logo" src={LinkedInLogo} />
                    </a>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="card__div">
              <Card
                style={{
                  width: "21rem",
                  color: "black",
                }}
              >
                <CardImg
                  className="headshot"
                  alt="Team member head shot"
                  src={Geo}
                />
                <CardBody>
                  <CardTitle tag="h5">Geovanna Perez</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    About Me!
                  </CardSubtitle>
                  <CardText>
                    Hello, my name is Geovanna Perez and I am a full stack web developer with experience on React and Ruby on Rails. On my spare time I enjoy watching movies. Thank you for taking the time to meet us!
                  </CardText>
                  <div className="socials__div">
                    <a
                      href="https://github.com/Geovannapg12"
                      target="_blank"
                    >
                      <img className="github__icon" alt="github logo" src={GithubLogo} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/geovanna-perez-38725123b/"
                      target="_blank"
                    >
                      <img className="linkedin__icon" alt="linkedin logo" src={LinkedInLogo} />
                    </a>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}
