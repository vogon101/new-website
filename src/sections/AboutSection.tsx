import profilePic from "../img/profilePicture.jpg";
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
                        <p className="p-justify">
                            I'm a recent graduate from the University of Cambridge where I completed an undergraduate
                            degree in computer science followed by a year studying Management Studies at the Cambridge Judge
                            Business School. I achieved a first in each year. I swapped from Computer Science to management because
                            I wanted to apply my strong technical skills to business problems&mdash;an area I have
                            always had a passion for.
                        </p>
                        <p className="p-justify">
                            I have always been highly engaged in politics, currently I am the director of <i><a href="https://pricedout.org.uk">PricedOut</a></i>, the national campaign for affordable house prices.
                            In this role I have appeared in a wide number of media outlets, including national radio, TV
                            and press.
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