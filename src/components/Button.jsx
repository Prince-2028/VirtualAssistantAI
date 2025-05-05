import React, { useState } from "react";

const Button = () => {
  const [voiceText, setVoiceText] = useState("");
  console.log(voiceText);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const click = () => {
    recognition.start();
  };
  recognition.addEventListener("result", (event) => {
    const voice = event.results[0][0].transcript;
    setVoiceText(voice);
  });

  return (
    <>
      <div className="mb-4">
        <p className="text-2xl font-extrabold text-blue-700 italic tracking-wide">
          👋 Hello, I am{" "}
          <span className="underline decoration-blue-400">Zyra</span>, your
          personal AI assistant
        </p>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={click}
      >
        Button
      </button>
    </>
  );
};

export default Button;
