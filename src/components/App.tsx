import Header from "./Header";
import ProfileCard from "./ProfileCard";
import SkillsCard from "./SkillsCard";
import LinkButton from "./LinkButton";
import { useState } from "react";
import { EN, ES } from "../langs";
import ProjectCardsContainer from "./ProjectCardsContainer";

export default function App() {

    const [lang, setLang] = useState<Language>(ES)

    const changeLang = () => { if(lang === EN) setLang(ES); else setLang(EN); }

    return(
      <div>
        <Header lang={lang} onLanguageChange={ changeLang } />
        <ProfileCard lang={lang}/>
        <SkillsCard lang={lang}/>
        <ProjectCardsContainer lang={lang}/>
      </div>  
    );
}