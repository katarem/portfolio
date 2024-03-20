import { useState } from 'react';
import './Header.css';
import Menu from '../Menu/Menu';
import MenuOption from '../Menu/MenuOption';
import { Language } from '../../utils/langs';
export default function Header({ lang, onLanguageChange }: { lang: Language, onLanguageChange: () => void }) {

    const [themeMode, setThemeMode] = useState('light')
    const [showItems, setShowItems] = useState(false)
    const [currentPage, setCurrentPage] = useState("home_option")

    document.body.setAttribute('data-theme', themeMode);

    const changeShowItems = () => { setShowItems(!showItems); }

    const changeMode = () => {
        if (themeMode == "dark") setThemeMode("light");
        else setThemeMode("dark");
    }

    const themeIcon = '/' + themeMode + '.svg'
    const langIcon = `/lang${lang.name}.svg`

    const mobile = window.screen.width <= 600;

    if (!mobile)
        return (
            <nav className="header-root">
                <h2>Katarem</h2>
                <div className="header-menu">
                    <button onClick={onLanguageChange} className='header-button-switch'>
                        <img src={langIcon} className='theme-switch'></img>
                    </button>
                    <button onClick={changeMode} className='header-button-switch'>
                        <img src={themeIcon} className="theme-switch"></img>
                    </button>
                    <a href='#home'>{lang.home}</a>
                    <a href='#skills'>Skills</a>
                    <a href='#proyects'>{lang.projects}</a>
                    <a href='#contact'>{lang.contact}</a>
                </div>
            </nav>
        );
    else if (mobile && !showItems)
        return (
            <div>
                <nav className="header-root">
                    <h2>Katarem</h2>
                    <div className="header-menu">
                        <img src={langIcon} className='theme-switch' onClick={onLanguageChange}></img>
                        <img src={themeIcon} className="theme-switch" onClick={changeMode}></img>
                        <Menu showMenu={changeShowItems} />
                    </div>
                </nav>
            </div>
        )
    else return (
        <div>
            <nav className="header-root">
                <h2>Katarem</h2>
                <div className="header-menu">
                    <img src={langIcon} className='theme-switch' onClick={onLanguageChange}></img>
                    <img src={themeIcon} className="theme-switch" onClick={changeMode}></img>
                    <Menu showMenu={changeShowItems} />
                </div>
            </nav>
            <div className='menu-root'>
                <div className='menu-options' id='options'>
                    <MenuOption name={lang.home} currentPage={currentPage} onClick={setCurrentPage} />
                    <MenuOption name='skills' currentPage={currentPage} onClick={setCurrentPage} />
                    <MenuOption name={lang.projects} currentPage={currentPage} onClick={setCurrentPage} />
                    <MenuOption name={lang.contact} currentPage={currentPage} onClick={setCurrentPage} />

                </div>
            </div>
        </div>
    )
}