import React, { useContext } from "react";
import TemaContext from "../Contexts/TemaContext";

const TemaButton = () => {
  const data = useContext(TemaContext);

  const Fonks = data.setTema;

  return (
    <div>
      <button onClick={() => Fonks(data.tema === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
    </div>
  );
};

export default TemaButton;
