import { useState, useEffect } from 'react'
import { Gameboard, Scoreboard } from './components'
import characterData from './data/characters.json'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(loadBestScore)
  const [shuffled, setShuffled] = useState([])
  const [clicked, setClicked] = useState(new Set());

  useEffect(() => {
    setShuffled(shuffle(characterData))
  }, [])

  function handleCardClick(character) {
    if (clicked.has(character)) {
      setScore(0)

      if (score > bestScore) {
        setBestScore(score);
        saveBestScore(score);
      }

      setClicked(new Set())
    }
    else {
      const previouslyClicked = new Set(clicked)
      previouslyClicked.add(character)

      setScore(score + 1)
      setClicked(previouslyClicked)
    }

    setShuffled(shuffle(characterData))
  }
  
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

function loadBestScore() {
  const result = localStorage.getItem("bestScore");
  return result !== null ? result : 0
}

function saveBestScore(bestScore) {
  console.log("here")
  localStorage.setItem("bestScore", bestScore);
}

export default App
