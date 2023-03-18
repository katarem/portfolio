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
        {/* <p>JAVA, JAVAFX, SQL, JS, React, Git</p> */}
        <h2>PROYECTOS</h2>
        <Post text="Katapi  Librería API RiotGames" link="https://github.com/katarem/KatApi" />
        <Post text="Lolstats  StatChecker de LoL JavaFX" link="https://github.com/dam-dad/LoLstats" />
        <Post
          text="BasicWeatherApp  Clima de España en js"
          link="https://github.com/katarem/BasicWeatherApp"
        />
        
        <div>
          <img></img>
        </div>
      </div>
    );
  }
}

export default Posts;
