import Header from "./Header/Header";
import ProfileCard from "./ProfileCard/ProfileCard";
import SkillsCard from "./SkillsCard/SkillsCard";
import { useState } from "react";
import { EN, ES } from "../langs";
import ProjectCardsContainer from "./ProjectCard/ProjectCardsContainer";
import ContactCard from "./ContactCard/ContactCard";

export default function App() {

    const [lang, setLang] = useState<Language>(ES);

    const changeLang = () => { if(lang === EN) setLang(ES); else setLang(EN); }
    console.log(import.meta.env.VITE_HELLO)
    return(
      <div>
        <Header lang={lang} onLanguageChange={ changeLang } />
        <ProfileCard lang={lang}/>
        <SkillsCard lang={lang}/>
        <ProjectCardsContainer lang={lang}/>
        <ContactCard lang={lang}/>
      </div>  
    );
}