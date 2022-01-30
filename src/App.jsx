import { useState } from 'react'
import './App.scss'
import NavBar from './components/navbar'
import Hero from './components/hero/'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>

      <Hero/>
    </div>
  )
}

export default App
