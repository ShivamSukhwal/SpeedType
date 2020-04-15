import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    const { value } = e.target;
    setText(value);
  };

  console.log(text);

  return (
    <div>
      <h1>How Fast Can You Type</h1>
      <textarea onChange={handleClick} value={text} />
      <h4>Time Left: </h4>
      <button>Start Game </button>
      <h2>Word Count: </h2>
    </div>
  );
}

export default App;
