import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Board from './components/Board';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Board></Board>
    </div>
  )
}

export default App
