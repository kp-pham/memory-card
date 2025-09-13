import { useEffect, useState } from 'react'
import '../styles/Card.css'

function Card({ requestURL }) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    let imageURL;

    async function fetchImage(url) {
      try {
        imageURL = processImage(await requestImage(url))
        setImage(imageURL)
      }
      catch(error) {
        console.error(error);
      }
    }

    fetchImage(requestURL)

    return () => {
      URL.revokeObjectURL(imageURL)
    }
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

export default Card