
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

async function request(url) {
  const response = await fetch(url, { mode: 'cors' })
  const data = await response.blob();

  console.log(data)
}

export default Card