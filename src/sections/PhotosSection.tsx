import React from "react";
import {PhotosCard} from "../components/PhotosCard";

export interface PhotoDefinition {
    name: string
    dir: string
    count: number
    headerimg: number
    description: string
}

type PhotosProps = {
    photos: Array<PhotoDefinition>
}

function PhotosSection({photos}: PhotosProps) {

    return (
        <div className="section-content">
            <h1>Photography Portfolio</h1>
            <div className="photos-section">
                {photos.map((v, i, a) => <PhotosCard definition={v} index={i}/>)}
            </div>
        </div>
    )

}

export {PhotosSection};
