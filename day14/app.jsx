import React, { useState } from 'react'
import './App.css'
import Counter from './components/counter'

const App = () => {
  const images = [
    'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=1200&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80&auto=format&fit=crop',
    'https://i.pinimg.com/originals/f0/26/0b/f0260b9dc87ab5c42c82dd0fbe58e4ab.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="app-root">
      <main className="app">
        <h1>Nature Image</h1>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          marginBottom: '20px'
        }}>
          <img 
            src={images[currentIndex]}
            alt={Nature landscape ${currentIndex + 1}}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'block',
              marginBottom: '15px'
            }}
          />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px'
          }}>
            <button
              onClick={goToPrevious}
              style={{
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                cursor: 'pointer',
                borderRadius: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#357abd'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#4a90e2'}
            >
              Left
            </button>
            <button
              onClick={goToNext}
              style={{
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                cursor: 'pointer',
                borderRadius: '5px',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#357abd'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#4a90e2'}
            >
                Right
            </button>
          </div>
        </div>
        <counter />
      </main>
    </div>
  )
}

export default App
