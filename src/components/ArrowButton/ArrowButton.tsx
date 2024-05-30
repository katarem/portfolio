import './ArrowButton.css'

export default function ArrowButton({ event, direction }: { event: () => void,direction: string }){
    const src = `./arrow-${direction}.svg`;
    return(
        <img className="arrow-btn" src={src} onClick={event}></img>
    )
}