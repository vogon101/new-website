import {PHOTOS_BASE, PHOTOS_EXT} from "./setup";
import {NotFoundPage} from "./components/NotFoundPage";
import React from "react";

function getPhotoGetter(dir: string) {
    const base = `${PHOTOS_BASE}${dir}/`

    function getPhoto(num: number) {
        return `${base}${num.toString().padStart(2, "0")}${PHOTOS_EXT}`
    }

    return getPhoto
}

function IntegerParam(param: string, max: number, error: () => JSX.Element, success: () => JSX.Element) : JSX.Element {
    if (!Number.isInteger(Number(param))) {
        return error();
    }
    const sid = parseInt(param);
    if (sid > max) {
        return error();
    }

    return success()
}

export {getPhotoGetter, IntegerParam};