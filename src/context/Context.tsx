
import { createContext,FC, useReducer } from 'react';
import { fetchReducer } from '../reducer/fetchReducer';
import { fetchImages } from '../public-api/fetchAPI';
import { ActionType } from '../reducer/types';
import { State,Action } from '../reducer/types';


interface ContextProps{
  state:State,
  dispatch:React.Dispatch<Action>,
  getImageData:()=> Promise<void>
  
}
const initialState:State ={
  
    isLoading: false,
    isError: false,
    data: [],
  
}
const Context = createContext<ContextProps>({
  state:initialState,
  dispatch:()=>undefined,
  getImageData:async()=> undefined
})


const Provider:FC<React.PropsWithChildren>  = ({children})=>{
  
  
  const [state,dispatch] = useReducer(fetchReducer,initialState);

  const getImageData = async () => {
    dispatch({ type: ActionType.FETCH_INIT });
    try {
      const results = await fetchImages();
   
      dispatch({ type: ActionType.FETCH_SUCCESS, payload: results });
    } catch {
      dispatch({ type: ActionType.FETCH_FAILURE });
    }
  };

  const valueToShare = {
    state:state,
    dispatch:dispatch,
    getImageData:getImageData
  }
  return(<div>


    <Context.Provider value={valueToShare}  >
{children}
    </Context.Provider>
  </div>)
  
}


export {Provider}


export default Context 
