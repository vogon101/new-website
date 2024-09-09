import profilePic from "../img/ReEdit.jpg";
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
                            I'm a graduate of the University of Cambridge where I completed a degree in computer science followed by a year studying <a href="https://www.jbs.cam.ac.uk/programmes/undergraduate/">Management Studies</a> at the Cambridge Judge Business School. I achieved a first in each year.
                        </p>
                        <p className="p-justify">
                            I am currently the Director of <i><a href="https://pricedout.org.uk">PricedOut</a></i>, the national campaign for affordable house prices. I have grown the team of volunteers signicantly, expanded our enagement with MPs and officials and boosted our fundraising efforts. I have been featured on TV and in <a href="https://www.thetimes.com/life-style/article/nimbys-are-the-real-reason-your-children-can-t-buy-a-house-xphk9cwvz">national</a> <a href="https://www.telegraph.co.uk/news/2023/08/30/environmental-red-tape-has-brought-our-economy-to-its-knees/">press</a>.
                        </p>
                    </div>
                </div>

                <div className="section-content-valign-bottom">
                    <div className="gallery gallery-left-big gallery-fullwidth">
                        <SocialButton icon={faGithubSquare} name="Github" href="https://github.com/vogon101"/>
                        <SocialButton icon={faTwitterSquare} name="Twitter" href="https://twitter.com/freddie_poser"/>
                        <SocialButton icon={faLinkedinIn} name="LinkedIn" href="https://linkedin.com/in/freddie-poser"/>
                    </div>
                </div>

            </div>
        </div>
    </div>)

}

export {AboutSection};