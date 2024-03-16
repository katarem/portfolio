import './ContactCard.css'
import contactsEN from '../assets/data/contactsEN.json'
import contactsES from '../assets/data/contactsES.json'


interface ContactFields{
    name: string,
    subject: string,
    content: string,
    send: string
}

export default function ContactCard({ lang }: { lang: Language }){

    let contactFields: ContactFields;
    if(lang.name === "ES") contactFields = contactsES;
    else contactFields = contactsEN;

    return(
        <section className="contact-root">
            <form className="contact-form">
                <div>
                    <label>{contactFields.name}</label>
                    <input></input>
                </div>
                <div>
                    <label>{contactFields.subject}</label>
                    <input></input>
                </div>
                <div>
                    <label>{contactFields.content}</label>
                    <input className='mail-content'></input>
                </div>
                <button>{contactFields.send}</button>
            </form>
        </section>
    )
}