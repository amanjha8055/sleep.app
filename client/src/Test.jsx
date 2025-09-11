// Test.jsx


import { useState } from 'react'
import Card from './assets/card.svg'
import Logo from '/face.svg'
import './App.css'

function Test() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={Card} className="logo" alt="Card" />
        </a>
      </div>
      <h1>Client</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/Test.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Test
