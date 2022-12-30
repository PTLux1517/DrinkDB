import * as React from 'react';
import {useCallback, useState} from "react";
import ReactCardFlip from "react-card-flip";
import CocktailCardFront from "./components/CocktailCardFront";
import CocktailCardBack from "./components/CocktailCardBack";
import './App.scss';

export default function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipHandler = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsFlipped(curr => !curr);
  }, []);

  return <div id="app">
    <ReactCardFlip containerClassName={"cocktail-card"} isFlipped={isFlipped} flipDirection={"horizontal"} infinite={true}
                   flipSpeedFrontToBack={0.8} flipSpeedBackToFront={0.8}>
      <CocktailCardFront cocktailName={"Toronto"} onClick={flipHandler} />
      <CocktailCardBack onClick={flipHandler} />
    </ReactCardFlip>
  </div>;
}
