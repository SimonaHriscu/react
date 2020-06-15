import React from "react";
// import React, { Componen./components/Textom "react";
//export default class App extends Component {
import List from "./components/List";
import Data from "./data.json";


const fileData = Data.map((obj) => {
  const {id, name, address} = obj;   //destructuring
  return(<h4 key= {id}>Hi, I am {name}, and I live at {address}
  </h4>)
})

const  headerStyle = {
  backgroundColor: 'black',
  color: "red",
}

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="header" style = {headerStyle}>Hi I am React</h1>
        <h2 style = {{
          backgroundColor: 'orange',
          color: "yellow",
        }}>My toDo</h2>
        {fileData}
        <List />

      </React.Fragment>
    );
  }
}