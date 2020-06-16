import React from 'react';
import {display, add} from "./helpers";

export default class App extends React.Component {
  constructor(props){
    super(props);
    //display(Hadi);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  print=()=>{
    console.log('I am a function without using this or bind');
    
  }
  //here we use bind
    handleSubmit() {
      console.log("I come from bind")
    }
  
//here we use this
  render(){
    this.newUser = () =>{
      console.log('I am a function built in render');
      
    }
  return (
      <React.Fragment>
        <h1 className ="container" >Hi I am React</h1>
        {// <List fun = {this.add}></List>
        this.newUser()
      }
      { this.handleSubmit
      }
      {add(3,5)}
      </React.Fragment>
   
  );
}
}



