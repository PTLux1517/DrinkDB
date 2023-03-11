import * as React from 'react';
import {useCallback, useState} from "react";
import ReactCardFlip from "react-card-flip";
import CocktailCardFront from "./components/CocktailCardFront";
import CocktailCardBack from "./components/CocktailCardBack";
import './App.scss';

export default function App() {
  const [isFlipped, setIsFlipped] = useState([false,false,false,false,false,false,false,false]);
  const flipHandler = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const cardIdx = parseInt(e.currentTarget.id.slice(-1));
    setIsFlipped(curr => curr.map((bool,i) => i==cardIdx ? !bool : bool));
  }, []);

  const cards = <>{
    [0,1,2,3,4,5,6,7].map(i =>
      <ReactCardFlip containerClassName={"cocktail-card"} isFlipped={isFlipped[i]} flipDirection={"horizontal"} infinite={true}
                     flipSpeedFrontToBack={0.8} flipSpeedBackToFront={0.8}>
        <CocktailCardFront idx={i} onClick={flipHandler} cocktailName={"Toronto"} />
        <CocktailCardBack idx={i} onClick={flipHandler} />
      </ReactCardFlip>
    )
  }</>;

  return <div id="app">
    <header>App Name</header>
    <main className={"cards-area-flex-container"}>{cards}</main>
  </div>;
}
