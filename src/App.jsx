import { useState } from 'react'
import { Gameboard, Scoreboard } from './components'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Scoreboard score={score} bestScore={bestScore}/>
      <Gameboard/>
    </>
  )
}

export default App
