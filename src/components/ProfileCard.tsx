import './ProfileCard.css'
import LinkButton from './LinkButton'
export default function ProfileCard(){

    return(
        <article className='profile-root' id='home'>
            <section className='profile-container'>
                <img className='profile-photo' src='https://avatars.githubusercontent.com/u/108900240'></img>
                <div className='profile-details'>
                    <p>Hola, soy Cristian desarrollador fullstack. Me apasiona la tecnología y aprenderla, adaptándome a nuevos entornos con facilidad.</p>
                    <div className='profile-links'>
                        <LinkButton name='GitHub' url='https://www.github.com' src='./src/assets/icons/github.svg'/>
                        <LinkButton name='LinkedIn' url='https://www.linkedin.com' src='./src/assets/icons/linkedin.svg'/>       
                    </div>
                </div>
            </section>
        </article>
    )


}