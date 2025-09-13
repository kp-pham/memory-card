import { useEffect, useState } from 'react'
import Card from './Card.jsx'
import '../styles/Gameboard.css'

const images = [
  'https://genshin.jmp.blue/characters/neuvillette/gacha-card',
  'https://genshin.jmp.blue/characters/furina/gacha-card',
  'https://genshin.jmp.blue/characters/hu-tao/gacha-card',
  'https://genshin.jmp.blue/characters/barbara/gacha-card',
]

function Gameboard() {
  const [shuffled, setShuffled] = useState([])

    useEffect(() => {
      setShuffled(shuffle(images))
    }, [])

  return (
    <section>
        <Card requestURL={shuffled[0]}/>
    </section>
  );
}

function shuffle(array) {
  const shuffled = [...array]

  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default Gameboard