import profilePic from "../img/rome.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faFileAlt, faRssSquare} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {faGithubSquare, faLinkedinIn, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import {SocialButton} from "../components/SocialButton";
import {SectionCard} from "../components/SectionCard";

function AboutSection() {
    return (<div className="section-content">
        <SectionCard image={profilePic}>
            <h4>Freddie Poser</h4>
            <div>
                <a href="mailto:freddie.poser@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope}/> freddie.poser@gmail.com
                </a>
            </div>
            <div>

            </div>
        </SectionCard>
        <div className="section-content-large align-left">
            <div className="section-content-valign">
                <div className="section-content-valign-top">
                    <div className="section-content-top">
                        <h1>About Me</h1>
                        <p>
                            I am a fourth year student at the University of Cambridge. I currently study management at
                            the Cambridge Judge Business School. Previously, I studied Computer Science for which I
                            received a high first. I swapped to management because I wanted to apply my strong technical skills to
                            business&mdash;an area I've always had a passion for.
                        </p>
                    </div>
                </div>

                <div className="section-content-valign-bottom">
                    <div className="gallery gallery-left-big gallery-fullwidth">
                        <SocialButton icon={faGithubSquare} name="Github" href="https://github.com/vogon101"/>
                        <SocialButton icon={faTwitterSquare} name="Twitter" href="https://twitter.com/freddie_poser"/>
                        <SocialButton icon={faLinkedinIn} name="LinkedIn" href="https://linkedin.com/in/freddie-poser"/>
                        <SocialButton icon={faRssSquare} name="Blog" href="https://freddieposer.substack.com"/>
                        <SocialButton icon={faFileAlt} name="CV" href="https://cv.vogonjeltz.com"/>
                    </div>
                </div>

            </div>
        </div>
    </div>)

}

export {AboutSection};