import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componentes/header";
import "./index.css";
import Info from "./componentes/info";
import Posts from "./componentes/posts";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.title = "katarem portfolio";
root.render(
  <div className="raiz">
    <Header />
    <div className="main">
      <Info link='https://github.com/katarem'/>
      <Posts />
    </div>
  </div>
);
