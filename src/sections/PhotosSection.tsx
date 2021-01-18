import React from "react";
import {PhotosCard} from "../components/PhotosCard";

export interface PhotoDefinition {
    name: string
    dir: string
    count: number
    headerimg: number
}

type PhotosProps = {
    photos: Array<PhotoDefinition>
}

function PhotosSection({photos}:PhotosProps) {

    return (
        <div className="section-content">
            {photos.map ((v, i, a) => <PhotosCard definition={v}/>)}
        </div>
    )

}

export {PhotosSection};
