import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomeScreen from './pages/WelcomeScreen'
import HomeScreen from './pages/HomeScreen'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  )
}

export default App

