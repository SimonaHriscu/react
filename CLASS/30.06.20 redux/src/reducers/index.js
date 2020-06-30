// 3. step
// importing every reducer has been created and combining them


import counter from "./counter";
import userLogin from "./login";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter,
    userLogin,
})

export default allReducers;