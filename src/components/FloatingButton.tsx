import React from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type FABProps = {
    icon: IconDefinition
    link: string
}

function FloatingButton(props: FABProps) {

    return (
        <Link className="fab" to={props.link}>
            <div className="fab-inner">
                <FontAwesomeIcon icon={props.icon} size="2x"/>
            </div>
        </Link>
    )

}

export {FloatingButton};