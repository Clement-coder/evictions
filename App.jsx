import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
      setCount(count + 1);

  };
  

  return (
    <>
      <div>
        <h1>React Strict Eviction</h1>
        <div className='container'>
          <img src="src/assets/blocky.jpeg" alt="" /> <br/>
          <button onClick={handleClick}>Follow Me 🥹</button>
          <h3>Followers {count}</h3>
        </div>
      </div>
    </>
  )
}

export default App
