import { useState } from 'react'
import './App.scss'
import NavBar from './components/navbar'
import Hero from './components/hero/'
import Spacer from './components/spacer'
import TechnologySection from './components/Technologies'
import FeatureSection from './components/features'
import DiscoverSection from './components/discover'
import TestimonialSection from './components/testimonials'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Spacer/>
      <TechnologySection/>
      <FeatureSection/>
      <DiscoverSection/>
      <TestimonialSection/>
    </div>
  )
}

export default App
