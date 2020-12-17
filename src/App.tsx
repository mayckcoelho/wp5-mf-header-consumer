import React from "react";
import ReactDOM from "react-dom";

import Header from "header/Header";

import "./index.css";

const App = () => (
  <div>
    <Header />
    <h1>Olá, estou na aplicação Consumer</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
