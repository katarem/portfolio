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
        <h2>PROYECTOS</h2>
        <Post text="Katapi  Librería para usar API de Riot en Java" link="https://github.com/katarem/KatApi" />
        <Post text="Lolstats  Visualizador de estadísticas en JavaFX" link="https://github.com/dam-dad/LoLstats" />
        <Post
          text="BasicWeatherApp  Buscador de temperatura y clima en ciudades de España en js"
          link="https://github.com/katarem/BasicWeatherApp"
        />
      </div>
    );
  }
}

export default Posts;
