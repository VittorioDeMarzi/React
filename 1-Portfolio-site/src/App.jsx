import { useState } from 'react'
import About from "./components/About"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header className="header"/>
        <About />
        <Projects />
        <Skills />
      </div>
    </>
  )
}

export default App
