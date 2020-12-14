import React from 'react';
import Image from 'react-bootstrap/Image';
import './Homepage.css';
import ProfilePic from '../components/ProfilePic.png';
import { faFilePdf} from "@fortawesome/free-solid-svg-icons";
// import { faFileAlt, faFilePdf} from "@fortawesome/free-regular-svg-icons;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

export default class Homepage extends React.Component {
  render() {
    return (
      <body>
        <div class="main-container">
          <h1 class="salutations">👋 hi there! </h1>
          <div class="profile-pic-bio-container">
            <div className="profile-pic-container">
              <Image alt="" src={ProfilePic} className="profile-pic" roundedCircle/>
            </div>
            <div class="bio-container">
              <p>I’m Albert, and I’m a student at CUNY-City College studying Computer Science and Gender & Sexuality Studies.</p>
              <p>In the past, I’ve interned at Microsoft as a New Technologist intern doing iOS dev, and at Twitter as a Software 
                Engineering intern working on video ads. In the future, I aspire to use technology to help my communities.</p>
              <p>Outside tech, I also enjoy creating Spotify playlists, exploring thrift stores, and binge-watching anime!</p>
            </div>
          </div>
          <div class="links-container">
            <div class="lets-connect-container">
              <h3>let's connect!</h3>
            </div>
            <div className="connect-buttons-container">
              <div>
                <div>
                  <a href="https://www.linkedin.com/in/albertrfelix" rel="noreferrer" target="_blank" id="button" class="linkedin-button">
                    <div class="icon">
                      <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                    <div>
                      <p>linkedin</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="https://www.github.com/albfelix31" rel="noreferrer" target="_blank" id="button" class="github-button">
                    <div class="icon">
                      <FontAwesomeIcon icon={faGithub}/>
                    </div>
                    <div>
                      <p>github</p>
                    </div>
                  </a>
                </div>            
              </div>
              <div>
                <div >
                  <a href="https://drive.google.com/file/d/1r5bdN2MqkovZf2d2gyCGk9qRx7IAnPVK/view?usp=sharing" rel="noreferrer" 
                  target="_blank" id="button" class="resume-button">
                    <div class="icon">
                      <FontAwesomeIcon icon={faFilePdf}/>
                    </div>
                    <div>
                      <p>resume</p>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="https://www.twitter.com/artxbel" rel="noreferrer" target="_blank" id="button" class="twitter-button">
                    <div class="icon">
                      <FontAwesomeIcon icon={faTwitter}/>
                    </div>
                    <div>
                      <p>twitter</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </body>
    );
  }
}