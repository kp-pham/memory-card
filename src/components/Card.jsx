
import '../styles/Card.css'
import image from '../assets/neuvillette.png'

function Card() {
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
  const imageURL = URL.createObjectURL(data)
  
  return <img src={imageURL}/>
}

console.log(processImage(await requestImage('https://genshin.jmp.blue/characters/neuvillette/gacha-card')))

export default Card