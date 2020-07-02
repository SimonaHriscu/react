import React, { Component, Fragment } from "react";
import ChildComponent from "./ChildComponent";
import { connect } from "react-redux";
import {changeName} from "../actions";

class ParentComponent extends Component {
  render() {
    //console.log(this.props.store);
    const { store, changeName } = this.props;
  //  console.log(store); // this will print counter:0 and name:"Simona"

    return (
      <Fragment>
        <h4>Hey, {store.name}!</h4>
        <button onClick={()=> changeName()}>Change name</button>

        <ChildComponent store={store} propsName="Nancy" />
      </Fragment>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    store,
  };
};
const mapDispatchToProps={
  changeName,
}

export default connect(mapStateToProps,mapDispatchToProps)(ParentComponent);
