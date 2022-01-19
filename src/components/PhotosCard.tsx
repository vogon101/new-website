import React from "react";
import {PhotoDefinition} from "../sections/PhotosSection";
import {SectionCard} from "./SectionCard";
import {getPhotoGetter} from "../utils";
import {Link} from "react-router-dom";
import {SmoothImage} from "./SmoothImage";

export interface PhotosCardProps {
    definition: PhotoDefinition
    index: number
}

export function PhotosCard(props: PhotosCardProps) {

    const def = props.definition

    const getPhoto = getPhotoGetter(def.dir);

    return (
        <Link to={"/photos/" + props.index}>
            <div className="photos-section-card">
                <div className="photos-section-card-inner">
                    <SmoothImage src={getPhoto(def.headerimg)}/>
                    <div className="photos-section-card-overlay">
                        <div className="photos-section-card-overlay-text">
                            {def.name}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )

}
