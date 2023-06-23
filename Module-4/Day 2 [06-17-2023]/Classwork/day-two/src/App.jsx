import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import WindowSizer from "./WindowSizer";
import Input from "./Input"
// import {Posts} from "./Posts"


function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App" style={{ color: "blue", backgroundColor: "yellow" }}>
      <Counter />
      <WindowSizer/>
      <Input value={inputValue} onChange={handleInputChange} />
      {/* <Posts/> */}
    </div>
  );
}

export default App;
