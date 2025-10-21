import { useState } from 'react'
import Card from './Card'
import './css/App.css'

function App() {
  const cards = [];
  for(let i = 0; i < 10; i++){
    cards.push(<Card key={i}></Card>)
  }


  return (
    <div className='body'>
    <h1>Memory Game!</h1>
    <div className="scoreboard">
      <p>Score: </p>
      <p>Best Score: </p>
    </div>
    <div className="board">
      {cards}
    </div>
    </div>
    
  )
}

export default App
