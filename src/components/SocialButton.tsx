import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

interface SocialProps {
    icon: IconDefinition
    name: string
    href: string
}

function SocialButton(props: SocialProps) {
    return (
        <div className="socials-button">
            <a href={props.href} className="link-nostyle">
                <div className="socials-icon">
                    <FontAwesomeIcon className="align-center" icon={props.icon} size="5x"/>
                </div>
                <div className="section-card-bottom align-center">{props.name}</div>
            </a>
        </div>
    )

}

export {SocialButton}