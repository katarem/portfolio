import { useState } from 'react';
import './Header.css';

export default function Header({ lang, onLanguageChange }: {lang: Language,onLanguageChange: () => void}){

    const [themeMode, setThemeMode] = useState('light')
    
    document.body.setAttribute('data-theme',themeMode);

    const changeMode = () => {
        if(themeMode == "dark") setThemeMode("light");
        else setThemeMode("dark");
    }
    const themeIcon = './src/assets/icons/' + themeMode + '.svg' 
    const langIcon = `./src/assets/icons/lang${lang.name}.svg`

    return (
        <nav className="header-root">
            <h2>Katarem</h2>
            <div className="header-menu">
                <img src={langIcon} className='theme-switch' onClick={onLanguageChange}></img>
                <img src={themeIcon} className="theme-switch" onClick={changeMode}></img>
                <a href='#home'>{lang.home}</a>
                <a href='#skills'>Skills</a>
                <a href='#proyectos'>{lang.projects}</a>
                <a href='#contacto'>{lang.contact}</a>
            </div>
        </nav>
    );
}