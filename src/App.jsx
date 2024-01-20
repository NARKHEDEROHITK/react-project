import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState([])

  return (
    <>
    <input type="text" />
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(value=>value+1)} >increase</button>
      <button onClick={()=>setCount(value=>value-1)}>decrease</button>
    </>
  )
}

export default App
