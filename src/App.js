import React from "react";
import ToDoList from "./ToDoList";

const  App = () =>{
  const greet  ="Evening ";
  return (
    <div>
      <h1 >Hello , Good {greet}</h1>
      <ToDoList/>
    </div> 
  );
}

export default App;