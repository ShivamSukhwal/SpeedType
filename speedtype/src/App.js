import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);

  const handleClick = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calculateWordCount = (text) => {
    const wordCount = text.trim().split(" ");
    return wordCount.filter((word) => word !== "").length;
  };

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    }
  }, [timeLeft]);

  return (
    <div>
      <h1>How Fast Can You Type</h1>
      <textarea onChange={handleClick} value={text} />
      <h4>Time Left: {timeLeft} </h4>
      <button>Start Game </button>
      <h2>Word Count: {() => calculateWordCount(text)} </h2>
    </div>
  );
}

export default App;
