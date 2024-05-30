import './MenuOption.css'

export default function MenuOption({name, id, currentPage, onClick}: { name: string, id: string,currentPage: string, onClick: (name: string) => void}){

    if(name==currentPage) return(
        <a id={`${id}_option`} href={`#${id}`} className="selected-option" onClick={() => onClick(name)}>{name}</a>
    )
    else return(
        <a id={`${id}_option`} href={`#${id}`} className="option" onClick={() => onClick(name)}>{name}</a>
    )

}