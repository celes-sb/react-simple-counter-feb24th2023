//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/secondscounter.jsx";

//render your react application
let tiempoSegundos = 0;
let decenaSeconds = 0;
let centenaSeconds = 0;
let hora1 = 0;
let hora2 = 0;
let hora3 = 0;

setInterval(() => {
  tiempoSegundos++;

  if (tiempoSegundos === 10) {
    tiempoSegundos = 0;
    decenaSeconds++;
  }

  if (decenaSeconds === 10) {
    decenaSeconds = 0;
    centenaSeconds++;
  }

  if (centenaSeconds === 10) {
    centenaSeconds = 0;
    hora1++;
  }

  if (hora1 === 10) {
    hora1 = 0;
    hora2++;
  }

  if (hora2 === 10) {
    hora2 = 0;
    hora3++;
  }

  ReactDOM.render(
    <SecondsCounter
      hora3={hora3}
      hora2={hora2}
      hora1={hora1}
      centenaSeconds={centenaSeconds}
      decenaSeconds={decenaSeconds}
      seconds={tiempoSegundos}
    />,
    document.querySelector("#app")
  );
}, 100);
