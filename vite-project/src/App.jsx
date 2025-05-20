import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoroughCard from './BoroughCard.jsx'

function App() {
    return (
    <div className="App">
      <h1>🗽 NYC Borough Shout-Out</h1>
      <BoroughCard borough="Manhattan" bgColor="#E5E4E2" />
      <BoroughCard borough="Brooklyn" bgColor="#FFD700" />
      <BoroughCard borough="Bronx" bgColor="#ADD8E6" />
      <BoroughCard borough="Queens" bgColor="#FFB6C1" />
      <BoroughCard borough="Staten Island" bgColor="#90EE90" />
      <BoroughCard /> {/* Uses default: Queens */}
    </div>
  )
}

export default App
