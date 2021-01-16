import profilePic from "./img/rome.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faRss, faRssSquare} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {faGithub, faGithubSquare, faLinkedinIn, faTwitter, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {SocialButton} from "./SocialButton";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";

function AboutSection() {
    return (<div className="section-content">
        <div className="section-content-left section-card">

            <img src={profilePic} alt="Me!" className=""/>
            <div className="section-card-bottom align-left">
                <h4>Freddie Poser</h4>
                <div>
                    <FontAwesomeIcon icon={faEnvelope}/> freddie.poser@gmail.com
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className="section-content-right align-left">
            <div className="section-content-valign">
                <div className="section-content-valign-top">
                    <div className="section-content-top">
                        <h1>About Me</h1>
                        <p>Hello there!</p>
                    </div>
                </div>

                <div className="section-content-valign-bottom">
                    <div className="gallery gallery-left gallery-fullwidth">
                        <SocialButton icon={faGithubSquare} name="Github"/>
                        <SocialButton icon={faTwitterSquare} name="Twitter"/>
                        <SocialButton icon={faLinkedinIn} name="LinkedIn"/>
                        <SocialButton icon={faRssSquare} name="Blog"/>
                    </div>
                </div>

            </div>
        </div>
    </div>)

}

export {AboutSection};