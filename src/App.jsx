import { useState } from 'react'
import './App.scss'
import NavBar from './components/navbar'
import Hero from './components/hero/'
import Spacer from './components/spacer'
import TechnologySection from './components/Technologies'
import FeatureSection from './components/features'
import DiscoverSection from './components/discover'
import TestimonialSection from './components/testimonials'
import MarkettingSection from './components/marketting'
import InsightSection from './components/insights'


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
      <MarkettingSection/>
      <InsightSection/>
    </div>
  )
}

export default App
