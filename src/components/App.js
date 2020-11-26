import React, { useState, useEffect } from 'react';
import Game from "./Game";

// STAR MATCH - V9
const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}
// key terms = state, hooks, components/function, side effects, props, render, JSX template syntax	

export function App() {
  return (
    <StarMatch />
  );
};
