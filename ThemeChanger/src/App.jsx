import { useState } from "react";
import { TemaProvider } from "./Contexts/TemaContext";
import TemaButton from "./Components/TemaButton";
import TemaArea from "./Components/TemaArea";

function App() {
  return (
    <div>
      <TemaProvider>
        <TemaButton />
        <TemaArea />
      </TemaProvider>
    </div>
  );
}

export default App;
