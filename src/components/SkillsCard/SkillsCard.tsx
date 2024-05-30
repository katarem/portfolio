import './SkillsCard.css'
import technologiesJSON from '../../data/technologies.json'
import LinkButton from '../LinkButton/LinkButton'
import { Language } from '../../utils/langs'

export default function SkillsCard({ lang }: {lang: Language}){
    
    return(
        <section className='skills-root' id='skills'>
            <section className='skills-container'>
                <h1>Skills</h1>
                <p>{lang.skills}</p>
                <div className='skills-grid'>
                    {technologiesJSON.map(tec => <LinkButton name={tec.name} src={tec.src} url={tec.url}/>)}
                </div>
            </section>
        </section>
    )
}