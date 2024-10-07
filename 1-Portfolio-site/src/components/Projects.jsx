import Project from "./Project.jsx"
import "./Projects.css"

export default function Projects() { 
    return (
        <div className="projects">
            <h3>PROJECTS</h3>
            <section>
                <Project number="1" languages="Spring, JS, React"/>
                <Project number="2" languages="Spring, TS, Angular"/>
                <Project number="3" languages="Spring, React"/>
            </section>
        </div>
    )
}