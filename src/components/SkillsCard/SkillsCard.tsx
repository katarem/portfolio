import './SkillsCard.css'
import tecnologiesJSON from '../../assets/data/technologies.json'
import LinkButton from '../LinkButton/LinkButton'

interface Skill{
    name: string,
    url: string,
    src: string
}


export default function SkillsCard({ lang }: {lang: Language}){
    let technologies: Skill[] = tecnologiesJSON
    return(
        <section className='skills-root' id='skills'>
            <section className='skills-container'>
                <h1>Skills</h1>
                <p>{lang.skills}</p>
                <div className='skills-grid'>
                    {technologies.map(tec => <LinkButton name={tec.name} src={tec.src} url={tec.url}/>)}
                </div>
            </section>
        </section>
    )
}