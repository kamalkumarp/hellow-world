import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const p1 = React.createElement("P", null, "This is paragraph One");


// const li1 = React.createElement("li", null, "first item");
// const li2 = React.createElement("li", null, "second item");
// const li3 = React.createElement("li", null, "third item");

// const myList = React.createElement("ul", null, [li1, li2, li3]);

// const div = React.createElement("div", null, [p1, myList]);

const myName = "Kamal";

const div = <div>
  <p style={{"color" : "#f00"}} > This is paragraph 1 </p>
  <p> Welecome {myName} </p>
  <p>two plus two = {2+2 } </p>

  <ul className="SmallList">
    <li>first item</li>
    <li>second item</li>
  </ul>
  <br />

  <input id="name" />
</div>;


ReactDOM.render(<App />,document.getElementById("root"));
    
/*
//SPREAD OPERATOR
const names = ["Simon", "David", "Sally", "Emma"];
const moreNames = [...names, "Diane"];

//DESTRUCTURING
type CustomerType = { name : string, age : number, email : string};
const customer1 : CustomerType = {name : "Simon", age : 23, email : "simon@nowhere.com" };
const {name, age, email} = customer1;
*/

reportWebVitals();