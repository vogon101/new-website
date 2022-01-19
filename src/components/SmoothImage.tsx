import React, {useEffect, useRef} from "react";

type SmoothImageProps = {
    src: string
    alt?: string
    maxSize?: boolean
};


function SmoothImage({src, alt, maxSize}: SmoothImageProps) {

    const [loaded, setLoaded] = React.useState(false);
    const img = useRef<HTMLImageElement>(null);
    const [hasSize, setHasSize] = React.useState(false);
    const [size, setSize] = React.useState({w: 0, h: 0});


    useEffect(() => {
        const poll = setInterval(() => {
            console.log("pol")
            if (img.current &&
                img.current.naturalWidth && img.current.naturalHeight &&
                !isNaN(img.current.naturalWidth) && !isNaN(img.current.naturalHeight) &&
                img.current.naturalWidth > 1 && img.current.naturalHeight > 1
            ) {
                clearInterval(poll)
                const w = img.current.naturalWidth
                const h = img.current.naturalHeight

                if (!maxSize) {
                    setSize({w:w, h:h})
                } else if (h > 400) {
                    setSize({w: (w / h) * 400, h: 400})
                } else if (window.innerWidth > 1000) {
                    setSize({w: 0.32 * window.innerWidth, h: (h / w) * (0.32 * window.innerWidth)})
                } else {
                    setSize({w: 0.95 * window.innerWidth, h: (h / w) * (0.95 * window.innerWidth)})
                }
                setHasSize(true)
            }
        }, 100);
        return () => clearInterval(poll)
    }, []);

    return (
        <div className="smooth-image-wrapper">
            <img
                src={src}
                className={`smooth-image smooth-image-${loaded ? "visible" : "hidden"}`}
                onLoad={() => setLoaded(true)}
                alt={alt}
                ref={img}
            />
            {loaded ? <div/> :
                <div className="smooth-image-preloader" style={hasSize ? {width: size.w, height: size.h} : {}}>
                    <div className="smooth-image-loading">
                        {/*{hasSize ? "Loading" : ""}*/}
                    </div>
                </div>
            }
        </div>
    );

}

export {SmoothImage};