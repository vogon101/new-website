interface ProjectItemProps {
    title: string;
    image: string;
    text: string;
    linkHref?: string;
}

function ProjectItem(props: ProjectItemProps) {
    const link = props.linkHref ? props.linkHref : "#projects"
    return (
        <div className="section-card project-card">
            <a href={link} className="link-nostyle">
                <img src={props.image}/>
                <h4>{props.title}</h4>
                <p className="pad-hor">{props.text}</p>
            </a>
        </div>
    )
}

export {ProjectItem}