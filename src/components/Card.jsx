
import '../styles/Card.css'
import image from '../assets/neuvillette.png'

function Card() {
  return (
    <button>
        <div>
            <img src={image}/>
        </div>
    </button>
  );
}

export default Card