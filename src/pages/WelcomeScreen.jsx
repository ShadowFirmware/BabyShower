import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GiPartyPopper, GiBalloons } from 'react-icons/gi'
import { FaBaby, FaHeart } from 'react-icons/fa'
import './WelcomeScreen.css'

export default function WelcomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="welcome-container">
      <div className="welcome-background-effects">
        <GiBalloons className="floating-icon icon-1" />
        <GiPartyPopper className="floating-icon icon-2" />
        <FaBaby className="floating-icon icon-3" />
        <FaHeart className="floating-icon icon-4" />
        <GiBalloons className="floating-icon icon-5" />
        <GiPartyPopper className="floating-icon icon-6" />
      </div>
      
      <div className="welcome-content">
        <div className="welcome-icon-container">
          <GiPartyPopper className="welcome-main-icon" />
        </div>
        
        <h1 className="welcome-title">¡Descubre el Secreto!</h1>
        <h2 className="welcome-name">Revelación de Género</h2>
        
        <div className="welcome-divider"></div>
        
        <p className="welcome-subtitle">
          Estás invitado a una celebración especial
        </p>
        
        <button 
          className="welcome-button"
          onClick={() => navigate('/home')}
        >
          <span className="welcome-button-text">Abrir Invitación</span>
          <GiBalloons className="welcome-button-icon" />
        </button>
      </div>
    </div>
  )
}

