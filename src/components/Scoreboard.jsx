import { useState } from 'react'
import '../styles/Scoreboard.css'

function Scoreboard() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <section>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </section>
  )
}

export default Scoreboard