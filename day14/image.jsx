import React, { useState, useEffect } from 'react'

const ImageSlider = ({ images = [] }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 50000)
    return () => clearInterval(id)
  }, [images.length])

  if (!images || images.length === 0) return null

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className="slider">
      <div className="slider-image-wrap">
        <img
          src={images[index]}
          alt={slide-${index}}
          className="slider-image"
        />
      </div>

      <div className="slider-controls">
        <button className="slider-button" onClick={prev} aria-label="Previous">
          Left
        </button>
        <div className="slider-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={"dot" + (i === index ? ' active' : '')}
              onClick={() => setIndex(i)}
              aria-label={Go to slide ${i + 1}}>
              &nbsp;
            </button>
          ))}
        </div>
        <button className="slider-button" onClick={next} aria-label="Next">
          Right
        </button>
      </div>
    </div>
  )
}

export default ImageSlider
