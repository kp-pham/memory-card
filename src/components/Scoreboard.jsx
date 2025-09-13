import '../styles/Scoreboard.css'
import icon from '../assets/paimon-icon.png'

function Scoreboard({ score, bestScore }) {
  return (
    <section id="scoreboard">
      <div className="branding">
        <img src={icon}/>
        <h1>Genshin Impact Memory Card Game</h1>
      </div>
      <div class="scores">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </section>
  )
}

export default Scoreboard