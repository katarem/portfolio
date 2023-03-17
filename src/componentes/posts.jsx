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
        <Post text="Katapi" link="https://github.com/katarem/KatApi" />
        <Post text="Lolstats" link="https://github.com/dam-dad/LoLstats" />
        <Post
          text="BasicWeatherApp"
          link="https://github.com/katarem/BasicWeatherApp"
        />
      </div>
    );
  }
}

export default Posts;
