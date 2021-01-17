interface ProjectItemProps {
    title: string;
    image: string;
    text: string;
    linkHref?: string;
}

function ProjectItem(props: ProjectItemProps) {
    const link = props.linkHref ? props.linkHref : "#projects"
    return (
        // <div className="project-card socials-button">
            <a href={link} className="link-nostyle project-card socials-button">
                <div className="socials-icon">
                    <img src={props.image} alt="Project image"/>
                </div>
                <div className="section-card-bottom project-card-bottom">
                    <h4>{props.title}</h4>
                    <p className="pad-hor">{props.text}</p>
                </div>
            </a>
        // </div>
    )
}

export {ProjectItem}