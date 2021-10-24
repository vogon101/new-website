import React from "react";
import {PhotoDefinition} from "../sections/PhotosSection";
import {Link, useParams} from "react-router-dom";
import {getPhotoGetter} from "../utils";
import {SmoothImage} from "../components/SmoothImage";

type PhotoGroupProps = {
    photoGroup: PhotoDefinition
}

function PhotoGroupGrid({photoGroup}: PhotoGroupProps) {

    const idxs = Array.from(Array(photoGroup.count).keys())
    let {sectionID} = useParams<{ sectionID: string }>();

    const getPhoto = getPhotoGetter(photoGroup.dir);

    return (
        <div>
            <div className="padding-vertical"/>
            <h2>{photoGroup.name}</h2>
            <h4>{photoGroup.description}</h4>
            <h5 className="align-center"><Link to={`/photos`}>Back</Link></h5>
            <div className="section-content">
                <div className="image-grid-container">
                    <div className="image-grid">
                        {
                            idxs.map(
                                ((v, i, a) =>
                                        <div className="image-grid-image" key={`grid-img-${i}`}>
                                            <Link to={`${sectionID}/${i}`} className="image-grid-image-link">
                                                <SmoothImage alt={`Image ${i} from ${photoGroup.name}`}
                                                             src={getPhoto(i + 1)}/>
                                            </Link>
                                        </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="padding-vertical"/>
        </div>
    )

}

export {PhotoGroupGrid}