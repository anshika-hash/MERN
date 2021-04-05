//  Chllenge:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date(2020,5,5,14);
curDate = curDate.getHours();
let greeting = ' ' ;

const cssStyle = {

};

if(curDate >= 1 && curDate < 12 ){
greeting = 'Good Morning';
cssStyle.color = 'green';
}else if(curDate>=12 && curDate < 19){
  greeting = 'Good Afternoon';
  cssStyle.color = 'Orange';
}else{
  greeting = 'Good Neight';
  cssStyle.color = 'Black';
}

ReactDOM.render(
  <>
  <div>
  <h1>
    Hello Guys,<span style={cssStyle}> {greeting} </span>
  </h1>
  </div>
  </>
,document.getElementById('root'));


..............................................................CSS...........................................

body {
  background-color: #b4f2e1;
  box-sizing: border-box;
  margin: 0;
  padding: 0%;
  font-family: "Josefin Sans",sans-serif;
}

*heading{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.heading{
  color: #fa9191;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  text-shadow: 0px 2px 4px #ffe9c5;
  margin: 50px;
}
.img_div {
 display: flex;
 justify-content: center;
}

.img_div img{
  width: 250px;
  height: 150px;
  /*margin: auto;*/
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
div{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
}

h1{
  padding: 20px;
  background-color: #ffe9c5;
  color: #fa9191;
  border-radius: 20px;
}
span{
  color: #eb6383;
}
© 2021 GitHub, Inc.
