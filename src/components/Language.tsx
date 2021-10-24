import React from 'react';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Badge} from "./Badge";

interface LanguageProps {
    icon: IconDefinition
    name: string
    ability?: string;
    noLine?: boolean
}

function Language(props: LanguageProps) {


    let badge = <div/>;
    if (props.ability) {
        let color = "#445599"
        switch (props.ability) {
            case "Highly Proficient":
                color = "#22aa55"
                break
            case "Proficient":
                color = "#779933"
        }
        badge = <Badge text={props.ability} color={color}/>
    }

    return (<div className={`Language ${props.noLine ? "language-noline" : ""}`}>
            <div className="language-left">
                <FontAwesomeIcon icon={props.icon}/> {props.name} </div>
            <div className="language-right">{badge}</div>
        </div>
    )

}

export {Language}