import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import './Homepage.css';
import ProfilePic from '../components/ProfilePic.png';
import Background from '../components/Background.jpg';

export default class Homepage extends React.Component {
  render() {
    return (
        <div class="main-container container p-5">
          <h1>👋 hi there! </h1>
          <div class="row justify-content-md-center">
            <div class="col-5">
              <Image alt="" src={ProfilePic} className="profile-pic" roundedCircle/>
            </div>
            <div class="col-5 bio">
              <p>I’m Albert, and I’m a senior at CUNY-City College, majoring in Computer Science and  minoring in 
                Gender & Sexuality Studies.</p>
              <p>In the past, I’ve interned at Microsoft as a New Technologist intern doing iOS dev, and at Twitter 
                as a Software Engineering intern working on video ads. In the future, I aspire to use technology to 
                help my communities.</p>
              <p>Outside tech, I also enjoy creating Spotify playlists, exploring thrift stores, and binge-watching 
                anime!</p>
            </div>
          </div>
          <div class="row justify-content-md-center links">
            <div class="col-3">
              <h3>let's connect!</h3>
            </div>
            <div class="col-1">
              <div class="row">
                <a href="https://www.linkedin.com/in/albertrfelix" rel="noreferrer" target="_blank" class="button">linkedin</a>
              </div>
              <div class="row">
                <a href="https://www.github.com/albfelix31" rel="noreferrer" target="_blank" class="button">github</a>
              </div>            
            </div>
            <div class="col-1">
              <div class="row">
                <a href="https://drive.google.com/file/d/1r5bdN2MqkovZf2d2gyCGk9qRx7IAnPVK/view?usp=sharing" rel="noreferrer" 
                target="_blank" class="button">resume</a>
              </div>
              <div class="row">
                <a href="https://www.twitter.com/artxbel" rel="noreferrer" target="_blank" class="button">twitter</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}