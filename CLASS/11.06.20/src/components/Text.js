import React from "react";

// const Text = (props) => {
//   return (
//     <React.Fragment>
//       {console.log(props)}
//       <h5>Hi, I am {props.name}</h5>
//     </React.Fragment>
//   );
// };

// export default Text;

export default class Text extends React.Component {
  render() {
    return(
         <h1> 
        {""}
        Hi, I am {this.props.name} and I am {this.props.age} years old
        </h1>
    )
  }
}


