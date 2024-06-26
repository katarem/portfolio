import LinkButton from "../LinkButton/LinkButton"
import './ProjectCard.css'

export default function ProjectCard({ project }: { project: Project}){

    return(
        <section className="pcard-root" onClick={() => {window.open(project.link)}}>
            <img src={project.img} className="pcard-img"></img>
            <section className="pcard-content">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <section>
                    {project.technologies.map(tec => {
                        const source = `./${tec}`;
                        return <LinkButton src={source} name={tec}/>
                    })}
                    
                </section>
            </section>
        </section>
    )


}