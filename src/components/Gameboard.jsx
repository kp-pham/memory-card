import Card from './Card.jsx'
import '../styles/Gameboard.css'

function Gameboard({ shuffled, handleCardClick }) {

  return (
    <section id="card-grid">
        {shuffled.map(requestURL => <Card requestURL={requestURL} onClick={handleCardClick} />)}
    </section>
  );
}

export default Gameboard