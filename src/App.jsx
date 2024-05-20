import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/navebar"
import Hero from "./components/hero"
import About from "./pages/about"
import Testimonial from './components/testimonial'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Hero/>
     <About/>
     <Testimonial/>
    </>
  )
}

export default App
