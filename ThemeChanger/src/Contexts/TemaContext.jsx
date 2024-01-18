import { createContext, useState } from "react";

const TemaContext = createContext();

export const TemaProvider = ({ children }) => {

    const [tema, setTema] =useState("light")

    const values = {
        tema,
        setTema
    }

  return <TemaContext.Provider value={values}> {children} </TemaContext.Provider >;
};

export default TemaContext;
