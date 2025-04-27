import React,{useState} from "react";

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
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={click}
    >
      Button
    </button>
  );
};

export default Button;
