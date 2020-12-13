import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Homepage.css';
import ProfilePic from '../components/ProfilePic.png';

export default class Homepage extends React.Component {
  render() {
    return (
      <Container fluid className="main-container">
        <h1>👋 hi there! </h1>
        <div className="picture-bio-container">
          <div>
            <Image alt="" src={ProfilePic} height="100" className="d-inline-block align-top" roundedCircle/>
          </div>
          <div>
            <p>i’m Albert, and i’m a senior at cuny–city college majoring in computer science and  minoiring in 
              gender & sexuality studies.</p>
            <p>in the past, i’ve interned at microsoft as a new technologist intern doing ios dev, and at twitter 
              as a software engineering intern working on video ads. in the future, i aspire to use technology to 
              help my communities.</p>
            <p>outside tech, i also enjoy creating Spotify playlists, exploring thrift stores, and binge-watching 
              anime!</p>
            <p>let's connect :)</p>
          </div>
        </div>
        <div className="btns-container">
          <div>
            <a href="https://www.linkedin.com/in/albertrfelix" class="button">linkedin</a>
          </div>
          <div>
            <a href="https://www.github.com/albfelix31" class="button">github</a>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1r5bdN2MqkovZf2d2gyCGk9qRx7IAnPVK/view?usp=sharing" class="button">resume</a>
          </div>
          <div>
            <a href="https://www.twitter.com/artxbel" class="button">twitter</a>
          </div>
        </div>
      </Container>
    );
  }
}