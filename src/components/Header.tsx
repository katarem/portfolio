import './Header.css'

export default function Header(){
    return (
        <nav className="header-root">
            <h2>Katarem</h2>
            <div className="header-menu">
                <a href='#home'>Inicio</a>
                <a href='#skills'>Skills</a>
                <a href='#proyectos'>Proyectos</a>
                <a href='#contacto'>Contacto</a>
            </div>
        </nav>
    );
}