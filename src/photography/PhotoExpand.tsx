import React from "react";
import {PhotoDefinition} from "../sections/PhotosSection";
import {Link, useParams} from "react-router-dom";
import {getPhotoGetter, IntegerParam} from "../utils";
import {FadeInSection} from "../components/FadeInContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {SmoothImage} from "../components/SmoothImage";
import {NotFoundPage} from "../components/NotFoundPage";

type PhotoExpandProps = {
    photoGroup: PhotoDefinition
}


function PhotoExpand({photoGroup}: PhotoExpandProps) {

    let {sectionID, photoID} = useParams<{ sectionID: string, photoID: string }>();


    return IntegerParam(photoID, photoGroup.count, () => <NotFoundPage nohead/>, () => {
        const sid = parseInt(sectionID);
        const pid = parseInt(photoID)

        const getPhoto = getPhotoGetter(photoGroup.dir)

        return (
            <FadeInSection>
                <div className="section-content-hor fullwidth-center">
                    <h5 className="align-center"><Link to={`/photos/${sid}`}>Back</Link></h5>
                </div>
                <div className="section-content-hor">
                    {pid > 0 ?
                        <Link className="image-arrow image-arrow-enabled" to={`/photos/${sid}/${pid - 1}`}>
                            <div className="image-arrow-inner image-arrow-inner-left">
                                <FontAwesomeIcon size="3x" icon={faAngleLeft}/>
                            </div>
                        </Link> : <div className="image-arrow"/>
                    }
                    <div className="image-expand">
                        <div className="image-expand-image">
                            <SmoothImage src={getPhoto(pid + 1)}/>
                        </div>
                    </div>
                    {pid + 1 < photoGroup.count ?
                        <Link className="image-arrow image-arrow-enabled" to={`/photos/${sid}/${pid + 1}`}>
                            <div className="image-arrow-inner image-arrow-inner-right">
                                <FontAwesomeIcon size="3x" icon={faAngleRight}/>
                            </div>
                        </Link> : <div className="image-arrow"/>
                    }
                </div>
                {/*<FloatingButton icon={faStepBackward} link={`/photos/${sid}`}/>*/}
            </FadeInSection>
        )
    })
}

export {PhotoExpand}