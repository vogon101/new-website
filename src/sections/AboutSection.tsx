import profilePic from "../img/rome.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFileAlt, faRss, faRssSquare} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
    faGithubSquare,
    faLinkedinIn,
    faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import {SocialButton} from "../components/SocialButton";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {SectionCard} from "../components/SectionCard";

function AboutSection() {
    return (<div className="section-content">
        <SectionCard image={profilePic}>
            <h4>Freddie Poser</h4>
            <div>
                <FontAwesomeIcon icon={faEnvelope}/> freddie.poser@gmail.com
            </div>
            <div>

            </div>
        </SectionCard>
        <div className="section-content-large align-left">
            <div className="section-content-valign">
                <div className="section-content-valign-top">
                    <div className="section-content-top">
                        <h1>About Me</h1>
                        <p>I'm a third year Computer Science Student at the University of Cambridge.</p>
                    </div>
                </div>

                <div className="section-content-valign-bottom">
                    <div className="gallery gallery-left-big gallery-fullwidth">
                        <SocialButton icon={faGithubSquare} name="Github" href="https://github.com/vogon101"/>
                        <SocialButton icon={faTwitterSquare} name="Twitter" href="https://twitter.com/freddie_poser"/>
                        <SocialButton icon={faLinkedinIn} name="LinkedIn" href="https://linkedin.com/in/freddie-poser"/>
                        <SocialButton icon={faRssSquare} name="Blog" href="https://blog.vogonjeltz.com"/>
                        <SocialButton icon={faFileAlt} name="CV" href="https://cv.vogonjeltz.com"/>
                    </div>
                </div>

            </div>
        </div>
    </div>)

}

export {AboutSection};