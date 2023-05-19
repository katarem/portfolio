import React from "react";
import Post from "./post";

class Posts extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="posts">
        <h2>¿QUIÉN SOY?</h2>
        <p>
          Hola, soy Cristian, desarrollador multiplataforma y este es mi
          porfolio donde iré incluyendo mi trabajo por la red.
        </p>
        <h2>SKILLS</h2>
        <div className="skillBox">
          <img
            src="https://classes.engineering.wustl.edu/cse231/core/images/2/26/Java.png"
            className="linkButton"
          ></img>
          <img
            src="https://cdn.cdnlogo.com/logos/c/68/c-sharp-800x800.png"
            className="linkButton"
          ></img>
          <img
            src="https://static.wixstatic.com/media/2724b2_a4c660815dde4271be00cb7e9b9cae2c~mv2.png/v1/fit/w_605%2Ch_533%2Cal_c%2Cq_80,enc_auto/file.jpg"
            className="linkButton"
          ></img>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4492/4492311.png"
            className="linkButton"
          ></img>
          <img
            src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"
            className="linkButton"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            className="linkButton"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
            className="linkButton"
          ></img>
        </div>

        {/* Idea de las 3 am polacas, cada post, es un desplegable, con un slider de 3 imágenes y un resumen del proyecto */}

        <h2>PROYECTOS</h2>
        <Post
          text="Katapi  Librería API RiotGames"
          link="https://github.com/katarem/KatApi"
        />
        <Post
          text="Lolstats  StatChecker de LoL JavaFX"
          link="https://github.com/dam-dad/LoLstats"
        />
        <Post
          text="RemBot  Bot de Discord en JavaScript"
          link="https://github.com/katarem/portfolio"
        />

        <div>
          <img></img>
        </div>
      </div>
    );
  }
}

export default Posts;
