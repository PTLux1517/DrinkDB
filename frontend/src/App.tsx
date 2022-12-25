import * as React from 'react';
import {useState} from "react";
import ReactCardFlip from "react-card-flip";
import CocktailCardFront from "./components/CocktailCardFront";
import CocktailCardBack from "./components/CocktailCardBack";
import './App.scss';

export default function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return <div id="app">
    <button onClick={e=>{e.preventDefault(); setIsFlipped(!isFlipped);}}>Flip card</button>
    <ReactCardFlip containerClassName={"cocktail-card"} isFlipped={isFlipped} flipDirection={"horizontal"} infinite={true}
                   flipSpeedFrontToBack={0.8} flipSpeedBackToFront={0.8}>
      <CocktailCardFront />
      <CocktailCardBack />
    </ReactCardFlip>
  </div>;
}
