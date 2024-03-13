import { ReactNode } from 'react'
import './SkillsCard.css'

export default function SkillsCard({ children }: {children: ReactNode}){
    return(
        <section className='skills-root' id='skills'>
            <section className='skills-container'>
                <h1>Skills</h1>
                <p>Estas son las tecnologías con las que he trabajado hasta ahora</p>
                <div className='skills-grid'>
                    {children}
                </div>
            </section>
        </section>
    )
}