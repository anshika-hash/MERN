import React from 'react';
import ReactDOM from 'react-dom';
import "./src/index.css";
import Heading from "./src/Heading";

ReactDOM.render(<h1>Hello World!!!</h1>,document.getElementById("root"));

ReactDOM.render([
    <h1>React JSX </h1>,
<p>ARRAY</p>,
<h2>JSX</h2>


],document.getElementById("root"));


ReactDOM.render(
<div>
    <p>More than one JSX from the help of</p>
    <h1>div tag</h1>
</div>

,document.getElementById("root"));


ReactDOM.render(
    // if we create render method from div one extra child div also
    // make div from html so if we don't want extra div node from html
    // we use React.Fragment
    <React.Fragment>
        <p>More than one JSX from the help of</p>
        <h1>div tag</h1>
    </React.Fragment>
    
    ,document.getElementById("root")
    );

    const name = "in React"
    const date = new date().toLocaleDateString();
    const time = new date().toLocaleTimeString();

    ReactDOM.render(
         <React.Fragment>
        
    <p>JSX Expression {name}</p>
    <h1>{3*5}</h1>
    <p>{Math.random()}</p>
    <h1>Current date is {date} </h1>
    <h1>Current date is {time} </h1>

    </React.Fragment>
        
        ,document.getElementById("root")
    );

//Template literal
console.log(`Project ${name}`);

////////////ContentEditable/////////////////////////

ReactDOM.render(
<React.Fragment>
<h4 contentEditable="true">Type here </h4>
<a href="https://picsum.photos/200/300" className="heading">
    <img src="https://picsum.photos/250/300" alt="RandomImg"/>
</a>
</React.Fragment>
,document.getElementById("root")
);

////////////////////////////////Used comonent that i had created in Heading.jsx////////////////////////////////

////////////////////////Inline Css in React//////////////////////
const obj = {
    color:"#fa9191",
    textTransformation:"capitalize",

};


ReactDOM.render(
    <React.Fragment>
    <Heading></Heading>  
    <h1 style={{color:"#fa9191",
    transition:"capitalize"
      
}} // OR style={obj}
></h1>
    </React.Fragment>
    ,document.getElementById("root")
    );

/////////////////////////////////Import and expo. obj from file.///////

// App.jsx
/*
const youtuber = "#HELLOW WORLD";
const favprog = "React js";
const name = "Anshika";

function myGame(){
    let game;
    return (game="Game Developer");
}
function myLame(){
    let Lame="kjkjjjo";
    return Lame;
}

export default youtuber;
export {favprog,myName,myGame};

.............index.js
import {favprog,myName,myGame} from "./App"
import youtuber from "./App"


ReactDOM.render(
<>
 <ol>
  <li> {youtuber}</li>
  <li> {favprog}</li>
  <li> {myGame()}</li>
</ol>
</>,document.getElementById("root");
)
*/



















































