import { useState, useRef } from "react";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsCounter";
import { Route, Routes, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import spider from "./assets/images/spider.jpg";
import ReactPlayer from "react-player/youtube";
import "./App.css";

function MyVideo() {
  return (
    <ReactPlayer url="https://www.youtube.com/watch?v=0VUYXs5_vuk&t=1813s" />
  );
}

function App() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  const vidUrl = "https://www.facebook.com/watch/?v=2534116590117365";
  const randomImageUrl = "https://picsum.photos/id/237/200/300";

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  }

  function toggle2() {
    if (bird2.paused) {
      bird2.play();
    } else {
      bird2.pause();
    }
  }

  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (value === 0) {
      alert("Cannot divide by zero");
    } else {
      setResult((result) => result / value);
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about-me" className="nav-item">
          About me
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <h1>Add three images with some styling</h1>
      <img width={400} height={400} src={spider} alt="An image of a spider" />
      <img
        width={400}
        height={400}
        src={require("./assets/images/spider.jpg")}
        alt="Another image of a spider"
      />
      <img src={randomImageUrl} width={400} height={400} alt="Random image" />

      <MyVideo />
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} />

      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>

      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>Result: {result}</p>
        <input 
          pattern="[0-9]*"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
}

export default App;
