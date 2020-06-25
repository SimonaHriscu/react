import React from "react";

//you should use 1) as often as possible though. It's the best-practice.
const person = (props) => {
  return (
    <div>
      <p>
    
        I am {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  ); // this is how we print dynamic content
};

export default person;
