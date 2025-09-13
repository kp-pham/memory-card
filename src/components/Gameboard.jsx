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
      shuffle(images)
      setShuffled(images)
    }, [])

  return (
    <section>
        <Card requestURL={shuffled[0]}/>
    </section>
  );
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  } 
}

export default Gameboard