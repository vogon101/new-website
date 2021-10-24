import React from "react";
import {PhotoDefinition} from "../sections/PhotosSection";
import {Route, useParams, useRouteMatch, Switch} from "react-router-dom";
import {PhotoGroupGrid} from "./PhotoGroupGrid";
import {PhotoExpand} from "./PhotoExpand";
import {NotFoundPage} from "../components/NotFoundPage";
import {IntegerParam} from "../utils";

type PhotoGroupPageProps = {
    photos: Array<PhotoDefinition>
}

function PhotoGroupPage({photos}: PhotoGroupPageProps): JSX.Element {

    const {path, url} = useRouteMatch();
    let {sectionID} = useParams<{ sectionID: string }>();

    return IntegerParam(sectionID, photos.length, () => <NotFoundPage nohead/>, () => {

        const sid = parseInt(sectionID)
        const photoGroup = photos[sid];

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
    })

}

export {PhotoGroupPage};
