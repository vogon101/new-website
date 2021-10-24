import React from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IconLinkProps {
    icon: IconDefinition
    href: string
}

function Ia(props: IconLinkProps) {
    return (
        <a href={props.href} className="link-highlight"><FontAwesomeIcon icon={props.icon}/></a>
    )
}

export {Ia};