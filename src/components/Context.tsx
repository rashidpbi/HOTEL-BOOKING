import { createContext,FC } from 'react';



const Context = createContext<string>('value');
const value = "dani";
const Provider:FC<React.PropsWithChildren>  = ({children})=>{
  return(<div>


    <Context.Provider value={value}>
{children}
    </Context.Provider>
  </div>)
  
}


export {Provider}


export default Context 
