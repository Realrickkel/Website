import { createContext, useState } from "react";

export const Context = createContext();


const ContextProvider = (props) =>{
    
    const [loaded, setLoaded] = useState(false);
    
    //dit zijn de values die in de contextprovider worden gestopt, als je dan bij main.jsx contenprovider om app heen zet, gelden deze values voor de gehele app waardoor je maar 1 context file nodig hebt voor alle context
    const contextValue = {
        loaded,
        setLoaded,
    }
    
    return(
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
)
}

export default ContextProvider