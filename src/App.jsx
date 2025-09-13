import { useState, useEffect } from 'react'
import { Gameboard, Scoreboard } from './components'
import './App.css'

const images = [
  'https://genshin.jmp.blue/characters/neuvillette/gacha-card',
  'https://genshin.jmp.blue/characters/furina/gacha-card',
  'https://genshin.jmp.blue/characters/venti/gacha-card',
  'https://genshin.jmp.blue/characters/jean/gacha-card',
  'https://genshin.jmp.blue/characters/lisa/gacha-card',
  'https://genshin.jmp.blue/characters/barbara/gacha-card',
  'https://genshin.jmp.blue/characters/kaeya/gacha-card',
  'https://genshin.jmp.blue/characters/diluc/gacha-card',
  'https://genshin.jmp.blue/characters/ningguang/gacha-card',
  'https://genshin.jmp.blue/characters/beidou/gacha-card',
  'https://genshin.jmp.blue/characters/zhongli/gacha-card',
  'https://genshin.jmp.blue/characters/hu-tao/gacha-card',
  'https://genshin.jmp.blue/characters/xianyun/gacha-card',
  'https://genshin.jmp.blue/characters/gaming/gacha-card',
  'https://genshin.jmp.blue/characters/yanfei/gacha-card',
  'https://genshin.jmp.blue/characters/raiden/gacha-card',
  'https://genshin.jmp.blue/characters/yae-miko/gacha-card',
  'https://genshin.jmp.blue/characters/sara/gacha-card',
  'https://genshin.jmp.blue/characters/arataki-itto/gacha-card',
  'https://genshin.jmp.blue/characters/ayaka/gacha-card',
]

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [shuffled, setShuffled] = useState([])

  useEffect(() => {
    setShuffled(shuffle(images))
  }, [])

  const handleCardClick = () => setShuffled(shuffle(images))

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
