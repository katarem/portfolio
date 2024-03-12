import './LinkButton.css'

export default function LinkButton({ name, url, src }: { name: string, url: string, src: string }){
    return (
        <img className='linkbutton-image' src={src} title={name} onClick={() => {window.open(url)}}></img>
    )
}