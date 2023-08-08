import React, { createContext, useState } from 'react'


export const Contexto = createContext();
export const Datos = ({ children }) => {
    const [info,setInfo] = useState(0);
    
    return(
        <Contexto.Provider value={{ info, setInfo}}>
            { children }
        </Contexto.Provider>
    ) 
}

