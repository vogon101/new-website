import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

interface SocialProps {
    icon: IconDefinition
    name: string
}

function SocialButton(props: SocialProps) {
    return (
        <div className="socials-button ">
            <FontAwesomeIcon className="socials-icon" icon={props.icon} size="5x"/>
            <div className="section-card-bottom">{props.name}</div>
        </div>
    )

}

export {SocialButton}