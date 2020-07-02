import React, { Component, Fragment } from "react";
import {connect} from 'react-redux';
import {increment, decrement, changeName} from "../actions";

class ChildComponent extends Component {
    render() {
     // console.log(this.props.store);
      const {store, increment, decrement, changeName} = this.props;
      // console.log(this.props); // this will print store, increment, decrement, changeName 
      return (
        <Fragment>
         <button onClick={()=> changeName()}>Change name</button>
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
  changeName,
}

  export default connect(mapStateToProps,mapDispatchToProps)(ChildComponent);