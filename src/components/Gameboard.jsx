import Card from './Card.jsx'
import '../styles/Gameboard.css'

const images = [
  'https://genshin.jmp.blue/characters/neuvillette/gacha-card',
  'https://genshin.jmp.blue/characters/furina/gacha-card',
  'https://genshin.jmp.blue/characters/hu-tao/gacha-card',
  'https://genshin.jmp.blue/characters/barbara/gacha-card',
]

function Gameboard() {
  return (
    <section>
        <Card requestURL={images[0]}/>
    </section>
  );
}

export default Gameboard;