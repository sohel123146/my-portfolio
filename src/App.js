import './App.css';
import React,{ useState } from "react";
import Navbar from './components/Navbar';
import Hello from './pages/Hello';
import About from './pages/About'

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#22222b";
      document.body.style.color = "lightgray";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div className="App w-100 h-[100vh] m-2">
      <Navbar toggleMode={toggleMode} mode={mode}/>
      <Hello mode={mode}/>
      <About mode={mode}/>
    </div>
  );
}

export default App;
