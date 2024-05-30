import './Menu.css'
export default function Menu({ showMenu }: { showMenu: () => void }){
    return(
        <img className="menu-button"  src="./menu.svg" onClick={showMenu}></img>
    )
}