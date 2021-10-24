import React from "react";
import {PhotoDefinition} from "../sections/PhotosSection";
import {Route, useParams, useRouteMatch} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import {PhotoGroupGrid} from "./PhotoGroupGrid";
import {PhotoExpand} from "./PhotoExpand";

type PhotoGroupPageProps = {
    photos: Array<PhotoDefinition>
}

function PhotoGroupPage({photos}: PhotoGroupPageProps) {

    let {sectionID} = useParams<{ sectionID: string }>();
    const sid = parseInt(sectionID);
    const photoGroup = photos[sid];

    const {path, url} = useRouteMatch();


    return (
        <Switch>
            <Route exact path={path}>
                <div>
                    <PhotoGroupGrid photoGroup={photoGroup}/>
                </div>
            </Route>
            <Route path={`${path}/:photoID`}>
                <div>
                    <PhotoExpand photoGroup={photoGroup}/>
                </div>
            </Route>
        </Switch>
    )

}

export {PhotoGroupPage};
