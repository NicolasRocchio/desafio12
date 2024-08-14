import React from "react"; // Corazon de react
import ReactDOM from "react-dom/client"; // Un adapatador para gestionar el DOM
import "./index.css";
import InicioApp from "./InicioApp";
import * as bootstrap from "bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InicioApp />
  </React.StrictMode>
);
