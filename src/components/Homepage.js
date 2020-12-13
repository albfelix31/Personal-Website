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
      <Container fluidclassName="main-container">
        <h1>hi there! </h1>
        <h2>Albert here :)</h2>
        <Image alt="" src={ProfilePic} height="100" className="d-inline-block align-top" roundedCircle/>
        <Row> 
            <p> about me</p>
        </Row>
        <Row> 
            <p> resume</p>
        </Row>
        <Row> 
            <p> projects</p>
        </Row>
        <Row> 
            <p> photography</p>
        </Row>
        <Row>
            <Col> 
                <p>linkedin</p>
            </Col>
            <Col> 
                <p>github</p>
            </Col>
            <Col> 
                <p>twitter</p>
            </Col>
        </Row>
      </Container>
    );
  }
}