import './ProfileCard.css'
import LinkButton from '../LinkButton/LinkButton'
import { Language } from '../../utils/langs'

export default function ProfileCard({ lang }: {lang: Language}){

    return(
        <article className='profile-root' id='home'>
            <section className='profile-container'>
                <img className='profile-photo' src='https://avatars.githubusercontent.com/u/108900240'></img>
                <div className='profile-details'>
                    <p>{lang.about}</p>
                    <div className='profile-links'>
                        <LinkButton name='GitHub' url='https://github.com/katarem' src='./github.svg'/>
                        <LinkButton name='LinkedIn' url='https://www.linkedin.com/in/cristian-m-espinosa-leal-129380268' src='./linkedin.svg'/>       
                    </div>
                </div>
            </section>
        </article>
    )


}