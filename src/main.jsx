import React from "react";
import ReactDOM from "react-dom/client";
import Artur from "./Artur";
import Valentina from "./Valentina"
import NavBar from "../src/components/NavBar"
import Services from "./components/Services";

import "./styles/main.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <NavBar/>
    </header>
    <div id="page">
      <div id="contents">
        <Services />
      </div>
      <div id="espaçamento"></div>
      <h1 className="separador">SOBRE NÓS</h1>
      <br />
      <br />
      <br />
    </div>
    <Artur />
    <Valentina />
  </React.StrictMode>
);
