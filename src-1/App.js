import React from "react";
//import { add, sub, mult } from './Exp.js';

//import "./styles.css";

let a = 30;
let b = 10;

const date = new Date();
const currentTime = date.getHours();

let greet = "";
const customStyle = {
  color: "red",
};

if (currentTime > 11 && currentTime < 18) {
  {
    greet = "afternoon";
    customStyle.color = "green";
  }
} else if (currentTime > 18) {
  greet = "evening";
  customStyle.color = "green";
} else if (currentTime < 12) {
  greet = "morning";
  customStyle.color = "orange";
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function App() {
  return (
    <div>
      <h1 style={customStyle}>Hello , Good {greet}</h1>
      <ul>
        <li> {'add -'  +add(a, b)} </li>
        <li> {sub(a, b)} </li>
        <li> {mult(a, b)} </li>
      </ul>
    </div> 
  );
}

export default App;