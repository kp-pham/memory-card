import { useEffect, useState } from 'react'
import '../styles/Card.css'

function Card() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    async function fetchImage() {
      try {
        const imageURL = processImage(await requestImage('https://genshin.jmp.blue/characters/neuvillette/gacha-card'))
        setImage(imageURL)
      }
      catch(error) {
        console.log();
      }
    }

    fetchImage()
  }, [])

  return (
    <button className="card-container">
        <div className="card">
            <img src={image}/>
        </div>
    </button>
  )
}

async function requestImage(url) {
  const response = await fetch(url, { mode: 'cors' })
  const data = await response.blob()

  return data;
}

function processImage(data) {
  return URL.createObjectURL(data)
}

// console.log(processImage(await requestImage('https://genshin.jmp.blue/characters/neuvillette/gacha-card')))

export default Card