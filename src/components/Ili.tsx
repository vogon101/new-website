import React, {ReactNode} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IconLIProps {
    icon: IconDefinition
    children: ReactNode
}

function Ili(props: IconLIProps) {
    return (
        <li>
            <span className="fa-li">
                <FontAwesomeIcon icon={props.icon}/>
            </span>
            {props.children}
        </li>
    )
}

export {Ili};