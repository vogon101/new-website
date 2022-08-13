import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileAlt, faRssSquare, faRss} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {SectionCard} from "../components/SectionCard";
import React from "react";
import pricedoutLogo from "../img/poLogo.png";
import {SocialButton} from "../components/SocialButton";
import {faGithubSquare, faLinkedinIn, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";

function PricedOutSection() {

    return (
        <div className="section-content">
            <SectionCard image={pricedoutLogo} link="https://pricedout.org.uk">
                <h4>PricedOut</h4>
                <div>
                    The national campaign for affordable house prices
                    <hr/>
                    <a href="https://twitter.com/PricedOutUK">
                        <FontAwesomeIcon icon={faTwitter}/> PricedOut's Twitter
                    </a><br/>
                    <a href="https://pricedout.org.uk">
                        <FontAwesomeIcon icon={faRss}/> PricedOut's Website
                    </a>
                </div>

            </SectionCard>
            <div className="section-content-large">
                <div className="section-content-valign">
                    <div className="section-content-valign-top">
                        <h1>PricedOut</h1>
                        <p className="p-justify">
                            PricedOut is the national campaign for affordable campaign. We fight for policies that will
                            see more houses built and better, more affordable housing for everyone. I have been director
                            since
                            May 2022, before which I was social media and volunteer lead.
                        </p>
                        <p className="p-justify">
                            In this role I have completed multiple TV and radio appearances as well as been featured in
                            a number of articles. Despite our small size we punch above our weight, frequently working
                            with legislators and policy makers on solutions to the housing crisis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export {PricedOutSection}