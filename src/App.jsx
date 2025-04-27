import React from "react";
import ai from "./assets/ai.png";

const App = () => {
  return (
    <div className="App flex flex-col items-center justify-start ">
      <img
        src={ai}
        alt="AI"
        className="w-48 md:w-80 rounded-lg shadow-lg mb-6 object-cover"
      />
    </div>
  );
};

export default App;
