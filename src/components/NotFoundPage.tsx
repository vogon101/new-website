import React from "react";
import {Helmet} from "react-helmet";
import {FPNavbar} from "./FPNavbar";

function NotFoundPage({nohead}:{nohead?: boolean}) {
    return (
        <div>
            {!nohead ? <div>
            <Helmet>
                <title>Freddie Poser</title>
            </Helmet>
            <FPNavbar/></div> : <div/>}
            Not Found
        </div>);
}

export {NotFoundPage}