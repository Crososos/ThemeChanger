import React, { useContext } from "react";
import TemaContext from "../Contexts/TemaContext";

const TemaArea = () => {
  const data = useContext(TemaContext);

  return (
    <div className="Temacontext">
      <h1>{data.tema}-Tema</h1>
      <div className="Temacontext-container">
        <div className={data.tema}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            neque? Iusto adipisci unde, alias doloribus officia, eum eos nostrum
            quae explicabo doloremque dignissimos maxime. Accusantium beatae
            fugit illo incidunt a?
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemaArea;
