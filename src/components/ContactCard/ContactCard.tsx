import './ContactCard.css'
import contactsEN from '../../data/contactsEN.json'
import contactsES from '../../data/contactsES.json'
import { useState } from 'react';
import { Language } from '../../utils/langs';

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

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [content,setContent] = useState("");

    const mailLink = `mailto:crismigesp@gmail.com?subject=${subject + ' - ' + `[ ${name} : ${email} ]`}&body=${content}`;


    return(
        <section className="contact-root" id='contact'>
            <form id="contact-form" className="contact-form" >
                <div>
                    <label htmlFor='name'>{contactFields.name}</label>
                    <input id='name' autoComplete='off' value={name} onChange={ev => setName(ev.target.value)}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input id='email' autoComplete='off' value={email} onChange={ev => setEmail(ev.target.value)}></input>
                </div>
                <div>
                    <label>{contactFields.subject}</label>
                    <input id='subject' autoComplete='off' value={subject} onChange={ev => setSubject(ev.target.value)}></input>
                </div>
                <div>
                    <label>{contactFields.content}</label>
                    <textarea name='content' id='content' className='mail-content' autoComplete='off' value={content} onChange={ev => setContent(ev.target.value)}></textarea>
                </div>
                <a className='contact-send' href={mailLink}>{contactFields.send}</a>
            </form>
        </section>
    )
}