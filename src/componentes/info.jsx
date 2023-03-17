import React from "react";
import LinkButton from "./linkButton";
class Info extends React.Component {
  constructor({link}) {
    super();
    this.state = {
      nombre: "Cristian M Espinosa Leal",
      usr: "@katarem",
      basicInfo: "Fullstack Dev",
      profilePic: "https://avatars.githubusercontent.com/u/108900240?v=4",
      link: link
    };
  }

  

  render() {
    return (
      <div className="profileInfo">
        <img src={this.state.profilePic} className="profilePic"></img>
        <div className="info">
          <div className="infoElement">{this.state.nombre}</div>
          <div className="infoElement">{this.state.basicInfo}</div>
          <div className="buttonBox">
          <LinkButton src='https://camo.githubusercontent.com/fe3b97974431a5652f0572ef8dd3c46d206d0aeb9658c7dd1f9c766ed89e4215/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067' goTo='https://github.com/katarem'/>
          <LinkButton src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png' goTo='https://www.linkedin.com/in/cristian-m-espinosa-leal-129380268/'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
