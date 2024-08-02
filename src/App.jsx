import { useState } from 'react'
import './App.css'
import Hero from './component/Hero'
import HeroSlider from './component/HeroSlider'
import ReactDom from "react-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <HeroSlider/>
    </>
  )
}

export default App
