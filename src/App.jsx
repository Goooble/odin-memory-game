import { useState } from "react";
import Card from "./Card";
import "./css/App.css";
function shuffle(array){
  const newArray = []
  while(array.length !== 0){
    let n = Math.floor(Math.random()*array.length);
    newArray.push(array.splice(n,1)[0])
  }
  console.log(newArray)
  return newArray
}


function App() {
  let cards = [];
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isSelected, setSelected] = useState(new Array(10).fill(false));
  let newGame = 0;//used to make api calls whenver game resets
  

  if (score > bestScore) setBestScore(score);
  for (let i = 0; i < 10; i++) {
    cards.push(<Card key={i} id={i} score={score} setScore={setScore} isSelected={isSelected} setSelected={setSelected}></Card>);
  }
  cards = shuffle(cards);
  console.log(cards)

  return (
    <div className="body">
      <h1>Memory Game!</h1>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className="board">{cards}</div>
      {score===10?<p className="win">Game Won!</p>:null}
    </div>
  );
}

export default App;
