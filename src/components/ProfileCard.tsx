import './ProfileCard.css'
import LinkButton from './LinkButton'
export default function ProfileCard(){

    return(
        <article className='profile-root'>
            <section className='profile-container'>
                <img className='profile-photo' src='https://avatars.githubusercontent.com/u/108900240'></img>
                <div className='profile-details'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor, lacus venenatis rhoncus varius, lacus nunc accumsan tellus, id varius nisl leo sit amet quam.</p>
                    <div className='profile-links'>
                        <LinkButton name='GitHub' url='https://www.github.com' src='./src/assets/svg/github.svg'/>
                        <LinkButton name='LinkedIn' url='https://www.linkedin.com' src='./src/assets/svg/linkedin.svg'/>       
                    </div>
                </div>
            </section>
        </article>
    )


}