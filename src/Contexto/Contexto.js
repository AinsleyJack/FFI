import React, { createContext, useContext, useState } from 'react'

// definicio de contexto 
 const Contexto = createContext(
{
    info: 0,
    oninfo: (list) => {},  
}
);

// implementcion
export default function  Datos ({ children })  {
    const [info,setInfo] = useState(0);

    // cambio de estado
    function oninfo (list){
            setInfo(list);
    }
    
    return(
        <Contexto.Provider value={{ info, setInfo, oninfo}}>
            { children }
        </Contexto.Provider>
    ) 
}

export function useContexto(){
    return useContext(Contexto);
}

