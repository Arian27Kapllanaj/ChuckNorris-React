import logo from "./logo.svg";
import "./App.css";
import ShowJoke from "./components/ShowJoke";
import { useState } from "react";

function App() {

  const [joke, setJoke] = useState('No joke yet')

  function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data['value']))
  }

  return (
    <div className="chuck">
      <div>
        <h1>Chuck Norris Jokes in <img src={logo} className="App-logo" alt="logo" /></h1>
      </div>
      <div>
        <button onClick={ getJoke }>Get Joke</button>
        <ShowJoke joke={ joke } />
      </div>
    </div>
  );
}

export default App;
