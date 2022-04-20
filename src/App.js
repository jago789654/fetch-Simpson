
import './App.css';
import DisplaySimpson from './components/DisplaySimpson'
import { useState } from 'react';
import axios from 'axios';


const sampleSimpson = {
  "quote": "Shut up, brain. I got friends now. I don't need you anymore.",
  "character": "Lisa Simpson",
  "characterDirection": "Right",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
};

function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);
  const getSimpson = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?')
      .then((response) => response.data)
      .then((data) => {
        setSimpson(data[0]);
      });
  };

  return (
    <div className='App'>
      <DisplaySimpson simpson={simpson} />
      <button type="button" onClick={getSimpson}>Get new citation</button>
    </div>
  );
}
  

export default App;
