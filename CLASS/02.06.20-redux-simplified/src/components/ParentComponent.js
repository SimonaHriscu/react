import React, { Component, Fragment } from "react";
import ChildComponent from "./ChildComponent";
import { connect } from "react-redux";

class ParentComponent extends Component {
  render() {
    //console.log(this.props.store);
    const { store } = this.props;
  //  console.log(store); // this will print counter:0 and name:"Simona"

    return (
      <Fragment>
        <h4>Hey, {store.name}!</h4>

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

export default connect(mapStateToProps)(ParentComponent);
