/* import {useReducer } from 'react'
import React from 'react'

import actions from './constants'

const initialState = {
  value:"dani"
}
const reducer = (state,action)=>{
switch(action.type){
  case actions.GET_DETAILS:
    return {
      ...state
    }
  default:
    return state;
  
}
}
function Hotel() {
  const [state,dispatch] = useReducer(reducer,initialState);
  
  const statevalue = dispatch(actions.GET_DETAILS);
  return (
    <div>
      "statevalue.value: "{statevalue.value}
      "value in state: "{state.value}
    
    </div>
  )
}

export default Hotel

 */