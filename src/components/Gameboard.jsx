import Card from './Card.jsx'
import '../styles/Gameboard.css'

function Gameboard({ shuffled, handleCardClick }) {

  return (
    <section id="card-grid">
        {shuffled.map(data => <Card key={data.name} requestURL={data.url} onClick={() => handleCardClick(data.name)} />)}
    </section>
  );
}

export default Gameboard