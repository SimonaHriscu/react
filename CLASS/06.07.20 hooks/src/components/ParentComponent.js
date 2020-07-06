import React, { Component, Fragment } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    render() {
      return (
        <Fragment>
          <h4>Hey, stranger!</h4>
          
          <ChildComponent />
        </Fragment>
      );
    }
  }

  export default ParentComponent;