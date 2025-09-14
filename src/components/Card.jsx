import { useEffect, useState } from 'react'
import fallback from '../assets/qiqi.png'
import '../styles/Card.css'

function Card({ requestURL, onClick }) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    let imageURL;

    async function fetchImage(url) {
      try {
        imageURL = processImage(await requestImage(url))
        setImage(imageURL)
      }
      catch {
        setImage(null)
      }
    }

    fetchImage(requestURL)

    return () => {
      URL.revokeObjectURL(imageURL)
    }
  }, [requestURL])

  return (
    <button className="card-container" onClick={onClick}>
        <div className="card">
          <img src={image !== null ? image : fallback}/>
        </div>
    </button>
  )
}

async function requestImage(url) {
  const response = await fetch(url, { mode: 'cors' })

  if (!response.ok)
    throw new Error();

  const data = await response.blob()

  return data;
}

function processImage(data) {
  return URL.createObjectURL(data)
}

export default Card