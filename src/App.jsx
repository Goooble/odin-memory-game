import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import "./css/App.css";

function shuffle(array) {
  const newArray = [];
  while (array.length !== 0) {
    let n = Math.floor(Math.random() * array.length);
    newArray.push(array.splice(n, 1)[0]);
  }
  return newArray;
}

function App() {
  let cards = [];
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isSelected, setSelected] = useState(new Array(10).fill(false));
  const [pokemons, setPokemons] = useState(new Array(10).fill({name:"", path:""}))
  const [isWon, setWon] = useState(0);
  //sprites in teh assets aint even used gng, directly getting from github
  //api call for pokemon
  useEffect(() => {
    let ignore = false;
    const pokemonArray = [];

    async function makeCall(id){
      let result = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
      if (!result.ok) {
        throw new Error("request failed");
      }

      return await result.json();
    }

    async function getData() {
      while(pokemonArray.length != 10){
        let id = Math.floor(Math.random()*1001)
        try{
          let result = await makeCall(id);
          let path = result.sprites.other.showdown.front_default
          if(path){
            pokemonArray.push({name: result.name, path: path})
          }

        }catch(error){
          console.log(error)
        }
      }
      console.log(pokemonArray)
      if(!ignore){
        setPokemons(pokemonArray);
      }
      
    }
    
    try {
      getData()
    } catch (error) {
      console.log(error);
    }
    //ignore setPokemons
    return () => {
      ignore = true;
    };
  }, [isWon]);

  if (score > bestScore) setBestScore(score);
  for (let i = 0; i < 10; i++) {
    cards.push(
      <Card
        key={i}
        id={i}
        score={score}
        setScore={setScore}
        isSelected={isSelected}
        setSelected={setSelected}
        pokemon={pokemons[i]}
        isWon = {isWon}
        setWon={setWon}
      ></Card>
    );
  }
  cards = shuffle(cards);

  return (
    <div className="body">
      <h1>Memory Game!</h1>
      <div className="scoreboard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className="board">{cards}</div>
      {score === 10 ? <p className="win">Game Won!</p> : null}
    </div>
  );
}

export default App;
