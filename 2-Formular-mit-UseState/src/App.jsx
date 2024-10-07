import { useState } from 'react'
import Formular from "./components/Formular.jsx"
import Details from "./components/Details.jsx"

import './App.css'

export default function App() {
  const [details, setDetails] = useState({})

  return (
    <>
      <Formular setDetails={setDetails} />
      <Details details={details}/>
    </>
  )
}


