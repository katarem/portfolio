import './MenuOption.css'

export default function MenuOption({name, currentPage, onClick}: { name: string, currentPage: string, onClick: (name: string) => void}){

    if(name==currentPage) return(
        <a id={`${name}_option`} href={`#${name}`} className="selected-option" onClick={() => onClick(name)}>{name}</a>
    )
    else return(
        <a id={`${name}_option`} href={`#${name}`} className="option" onClick={() => onClick(name)}>{name}</a>
    )

}