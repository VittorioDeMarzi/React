import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoFormular from './components/ToDoFormular'

function App() {
  const [toDos, setToDos] = useState([])

  return (
    <>
      <ToDoFormular setToDos={setToDos} />
      <ToDoList toDos={toDos} />
    </>
  )
}

export default App
