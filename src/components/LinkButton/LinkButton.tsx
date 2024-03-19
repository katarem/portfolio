import './LinkButton.css'

interface LinkButtonProps{
    name: string,
    url?: string,
    src: string
}




export default function LinkButton({ name, url, src }: LinkButtonProps){
   
    const openURL = () => {
        if(url !== undefined){
            window.open(url);
        }
    }
   
    return (
        <img className='linkbutton-image' src={src} title={name} onClick={openURL}></img>
    )
}