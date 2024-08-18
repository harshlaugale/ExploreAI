import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Hero from './components/custom/Hero'
import Aboutus from './components/custom/Aboutus'
import Review from './components/custom/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* herp */}
      <Hero/>
      <Aboutus/>
      <Review/>
    </>
  )
}

export default App
