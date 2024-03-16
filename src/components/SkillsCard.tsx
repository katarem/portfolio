import { ReactNode, useState } from 'react'
import './SkillsCard.css'

export default function SkillsCard({ lang,children }: {lang: Language,children: ReactNode}){

    return(
        <section className='skills-root' id='skills'>
            <section className='skills-container'>
                <h1>Skills</h1>
                <p>{lang.skills}</p>
                <div className='skills-grid'>
                    {children}
                </div>
            </section>
        </section>
    )
}