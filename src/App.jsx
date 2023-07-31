import { useState } from 'react'
import charactersGOT from "./data.js"
import Header from '../src/components/Header.jsx'

import './App.css'
import ContainCard from './components/ContainCard'

function App() {
  const [ characters, setCharacters ] = useState(charactersGOT)

  return (
    <>
      <Header />
      <ContainCard characters={characters} />
    </>
  )
}

export default App
