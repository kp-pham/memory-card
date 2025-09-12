
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

export default Card