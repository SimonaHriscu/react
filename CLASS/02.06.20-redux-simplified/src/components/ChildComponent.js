import React, { Component, Fragment } from "react";
import {connect} from 'react-redux';
import {increment, decrement} from "../actions";

class ChildComponent extends Component {
    render() {
     // console.log(this.props.store);
      const {store, increment, decrement} = this.props;
      // console.log(this.props); // this will print store, increment, decrement, changeName 
      return (
        <Fragment>
         
         <hr/>
         Our current likes: {store.counter} 
         <hr/>
         <button onClick={()=>increment()}> + </button>
         <button onClick={()=>decrement()}> - </button>
        </Fragment>
      );
    }
  }


const mapStateToProps= (store)=>{};
const mapDispatchToProps={
  increment,
  decrement, 
}

  export default connect(mapStateToProps,mapDispatchToProps)(ChildComponent);