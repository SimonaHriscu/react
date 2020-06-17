import React from 'react';
import MenuItem from "./menu/MenuItem"


const List=(props)=>{
    
    console.log(props);
    return(<React.Fragment>
        <MenuItem parentInfo = {props.data}/>
    </React.Fragment>);
   
}

export default List;