import React from 'react';



const MenuItem=(props)=>{
    
    console.log(props);
    return(<React.Fragment>
       {props.parentInfo.name}
    </React.Fragment>);
   
}

export default MenuItem;