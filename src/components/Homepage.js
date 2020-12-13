import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Row';
import './Homepage.css';
import ProfilePic from './ProfilePic.png';

export default class Homepage extends React.Component {
  render() {
    return (
      <Container className="main-container">
              <h1>Albert Felix!</h1>
              <Image className="profile-pic" src={ProfilePic} roundedCircle/>
      </Container>
    );
  }
}