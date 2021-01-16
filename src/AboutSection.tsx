import profilePic from "./img/rome.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

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
                    Hello
                </div>

            </div>
        </div>
    </div>)

}

export {AboutSection};