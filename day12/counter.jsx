import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Counter</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
                <button 
                    onClick={decrement}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '20px', 
                        cursor: 'pointer',
                        backgroundColor: '#ff4d4d',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    -
                </button>
                <span style={{ fontSize: '24px', margin: '0 15px' }}>{count}</span>
                <button 
                    onClick={increment}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '20px', 
                        cursor: 'pointer',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px'
                    }}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter
