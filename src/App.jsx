import { useState, useEffect } from 'react'
import { Gameboard, Scoreboard } from './components'
import characterData from './data/characters.json'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [shuffled, setShuffled] = useState([])

  useEffect(() => {
    setShuffled(shuffle(characterData))
  }, [])

  const handleCardClick = () => setShuffled(shuffle(characterData))
  
  return (
    <>
      <Scoreboard score={score} bestScore={bestScore}/>
      <Gameboard shuffled={shuffled} handleCardClick={handleCardClick}/>
    </>
  )
}

function shuffle(array) {
  const shuffled = [...array]

  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default App
