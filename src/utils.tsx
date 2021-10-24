import {PHOTOS_BASE, PHOTOS_EXT} from "./setup";

function getPhotoGetter(dir: string) {
    const base = `${PHOTOS_BASE}${dir}/`

    function getPhoto(num: number) {
        return `${base}${num.toString().padStart(2, "0")}${PHOTOS_EXT}`
    }

    return getPhoto
}

export {getPhotoGetter};