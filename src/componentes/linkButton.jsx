import React from "react";

class LinkButton extends React.Component{

    constructor({src, goTo}){
        super();
        this.state = { src, goTo }
    }

    render(){
            return(
                <img className='linkButton' src={this.state.src} onClick={()=>window.open(this.state.goTo, '_blank')}>
            </img>
            )
    }

}

export default LinkButton