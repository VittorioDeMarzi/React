import "./Project.css"

export default function Project(props) { 
    return (
        <article className="project">
            <h4>Project{props.number}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptates.</p>
            <h5>{props.languages}</h5>
        </article>
    )
}