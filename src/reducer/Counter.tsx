/* import { useReducer } from 'react'
import { FC } from 'react'


enum actions{
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}
interface Action{
  type: actions
}
interface State{
  count: number
}
const initialState = {
  count: 0
}
const reducer = (state:State,action:Action)=>{
switch(action.type){
  case actions.INCREMENT:
    return {
      ...state, count: state.count + 1
    }
  case actions.DECREMENT:
    return {
      ...state, count: state.count - 1
    }
  default:
    return state;
  
}
}
const  Counter:FC = ()  =>{
  const [counter,dispatch] = useReducer(reducer,initialState);
  
  
    return(
      <div>
     {counter.count}
     <button type='button' onClick={()=>dispatch({type:actions.INCREMENT})}>INCREMEMENT</button>
     <button type='button' onClick={()=>dispatch({type:actions.DECREMENT})}>DECREMENT</button>
    
    </div>
    )
  
}

export default Counter



 */