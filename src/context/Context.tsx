import { createContext,FC, useReducer } from 'react';
import { fetchReducer } from '../reducer/fetchReducer';

import { State,Action } from '../reducer/types';


interface ContextProps{
  state:State,
  dispatch:React.Dispatch<Action>;
}
const initialState:State ={
  
    isLoading: false,
    isError: false,
    data: [],
  
}
const Context = createContext<ContextProps>({
  state:initialState,
  dispatch:()=>undefined
})


const Provider:FC<React.PropsWithChildren>  = ({children})=>{
  
  
  const [state,dispatch] = useReducer(fetchReducer,initialState);

  const valueToShare = {
    state:state,
    dispatch:dispatch
  }
  return(<div>


    <Context.Provider value={valueToShare}  >
{children}
    </Context.Provider>
  </div>)
  
}


export {Provider}


export default Context 
