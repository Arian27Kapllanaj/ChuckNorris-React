import logo from "./logo.svg";
import "./App.css";
import ShowJoke from "./components/ShowJoke";
import { useState } from "react";
import SavedList from "./components/SavedList";

function App() {

  const [joke, setJoke] = useState('No joke yet')
  const [saved, setSaved] = useState([])

  function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data['value']))
  }

  function saveJoke() {
    let savedJokes = [...saved]
    savedJokes.push(joke)
    setSaved(savedJokes)

  }

  return (
    <div className="chuck">
      <div>
        <h1>Chuck Norris Jokes in <img src={logo} className="App-logo" alt="logo" /></h1>
      </div>
      <div>
        <button onClick={ getJoke }>Get Joke</button>
        <button onClick={ saveJoke }>Save Joke</button>
        <ShowJoke joke={ joke } />
        <SavedList saved={ saved }/>
      </div>
    </div>
  );
}

export default App;
