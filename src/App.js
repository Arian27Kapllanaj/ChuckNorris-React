import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import showJoke from "./components/ShowJoke";

function App() {
  const [word, setWord] = useState("");
  const [s] = useState("");
  const [correct] = useState([]);

  function getWord() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0]);
        show();
      });
  }

  function show() {
    let s = word;
    //document.write(s);
  }

  return (
    <div className="App">
      <header>
        <h1>
          Chuck Norris in React
          <img src={logo} className="App-logo" alt="logo" />
        </h1>
      </header>

      <div>
        <button onClick={getWord}>Get a Joke</button>
        <showJoke word={word} />
      </div>
    </div>
  );
}

export default App;
