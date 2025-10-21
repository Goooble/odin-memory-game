import { useState } from "react";
import Card from "./Card";
import "./css/App.css";

function App() {
  const cards = [];
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isSelected, setSelected] = useState(new Array(10).fill(false));

  if (score > bestScore) setBestScore(score);
  for (let i = 0; i < 10; i++) {
    cards.push(<Card key={i} id={i} score={score} setScore={setScore} isSelected={isSelected} setSelected={setSelected}></Card>);
  }

  return (
    <div className="body">
      <h1>Memory Game!</h1>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className="board">{cards}</div>
    </div>
  );
}

export default App;
