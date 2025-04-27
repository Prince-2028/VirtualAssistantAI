import React from "react";
import ai from "../assets/ai.png";
import Button from "./Button";

const Ai = () => {
  return (
    <div className="App flex flex-col items-center justify-start ">
      <img
        src={ai}
        alt="AI"
        className="w-48 md:w-80 rounded-lg shadow-lg mb-6 object-cover"
      />
      <Button/>
    </div>
  );
};

export default Ai;
