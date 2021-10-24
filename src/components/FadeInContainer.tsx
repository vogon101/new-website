import React from "react";

function FadeInSection(props: any) {
    const [isVisible, setVisible] = React.useState(props.isvis);
    const domRef = React.useRef<any>();
    React.useEffect(() => {
        const curr = domRef.current
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(curr);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}


export {FadeInSection};