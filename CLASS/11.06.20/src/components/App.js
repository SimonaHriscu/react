import React from "react";
import {Text, Hello} from "./Text";
const userLogin = true;
const names = ['Simona', 'Hadi','Ovidiu','Andreea'];

function App() {
  const listName = names.map((name, i) => (
    <li key = {i}>{name}</li>
   ))
  return (
    <React.Fragment>
      <h1>This is the second React file</h1>
      <Text name={userLogin? "Simona": "Please log in "} age="22" />
      <Text name="Ovidiu" age = "15"/>
      <ul>{listName}</ul>
      

<h1>{userLogin ?'Hi Simo' : "Login pls"} </h1>
    </React.Fragment>
  );
}

export default App;
