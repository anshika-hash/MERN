........................Html.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
   
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
   
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
   
  </body>
</html>

........................Index.js

import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Component";
import Para from "./List";

ReactDOM.render(
<>
<Heading></Heading> 
<Para/>
</>,
document.getElementById('root'));

...........................List.jsx

import React from "react";

function Para(){
    return
    (<ol>
        <li>Anshika Tyagi</li>
        <li>Sadhna Tyagi</li>
        <li>Rajkumar Tyagi</li>
      </ol>);
}

export default Para;
     
...........................Component.jsx
     
import React from "react";

function Heading(){
    return (<h3> COMPONENT </h3>);
// Parenthesis for More than one ...  
}

export default Heading;
            
................................            
     
