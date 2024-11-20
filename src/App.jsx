import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NEWTODO from './components/NEWTODO'
import TODOS from './components/TODOS'

function App() {
  const [todos, setTodos] = useState([])

  const handleAddTodos =(newtodo)=>{

    setTodos((oldtodo)=>{
      return [...oldtodo, newtodo]
    })

  }
  return (
    <>
      <NEWTODO newtodo={handleAddTodos}/>
      <TODOS todos={todos} key={todos.index} />
    </>
  )
}

export default App
