import { useState } from "react"
import ArrowButton from "../ArrowButton/ArrowButton"
import ProjectCard from "./ProjectCard"
import './ProjectCardsContainer.css'
import esProjects from '../../assets/data/projectsES.json'
import enProjects from '../../assets/data/projectsEN.json'

enum Directions{
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

export default function ProjectCardsContainer({ lang }: { lang: Language}){

    let projects: Project[]
    if(lang.name === "ES")
        projects = esProjects
    else
        projects = enProjects

    const [index, setIndex] = useState(0)

    const next = () => {
        if(index===projects.length-1) setIndex(0)
        else setIndex(index+1)
    }
    const prev = () => {
        if(index===0) setIndex(projects.length-1)
        else setIndex(index-1)
    }


    return(
        <div className="pcardcontainer-root" id="proyectos">
            <div className="pcardcontainer-grid">
            <ArrowButton direction={Directions.LEFT} event={prev}/>
            <ProjectCard project={projects[index]}/>
            <ArrowButton direction={Directions.RIGHT} event={next}/>
            </div>
        </div>
    )
}

