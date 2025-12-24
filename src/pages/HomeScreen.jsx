import React, { useState, useEffect, useRef } from 'react'
import './HomeScreen.css'
import { FaBaby, FaUser, FaUserAlt, FaHeart, FaBirthdayCake, FaGamepad, FaUtensils, FaCamera, FaHandHoldingHeart, FaMapMarkerAlt, FaCar, FaComment, FaCalendarPlus } from 'react-icons/fa'
import { GiPartyPopper, GiBalloons } from 'react-icons/gi'

export default function HomeScreen() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const musicIframeRef = useRef(null)

  useEffect(() => {
    const eventDate = new Date('2026-01-03T15:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Intentar reproducir música automáticamente después de la interacción del usuario
    const handleUserInteraction = () => {
      if (musicIframeRef.current) {
        try {
          // Intentar reproducir automáticamente usando la API de YouTube
          const iframe = musicIframeRef.current
          iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
        } catch (e) {
          // Silenciar errores
        }
      }
    }

    // Intentar reproducir después de cualquier interacción del usuario
    const events = ['click', 'touchstart', 'keydown', 'scroll']
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true })
    })

    // También intentar después de un pequeño delay
    const timeout = setTimeout(() => {
      handleUserInteraction()
    }, 1000)

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
      })
      clearTimeout(timeout)
    }
  }, [])

  const addToCalendar = () => {
    const eventDate = new Date('2026-01-03T15:00:00')
    const endDate = new Date('2026-01-03T19:00:00')
    
    const formatDate = (date) => {
      return date.toISOString().replace(/-|:|\.\d\d\d/g, '')
    }

    const start = formatDate(eventDate)
    const end = formatDate(endDate)
    const title = encodeURIComponent('Revelación de Género')
    const description = encodeURIComponent('¡Descubre el secreto! Revelación de género de Genaro y Abril')
    const location = encodeURIComponent('Av. Palmira 204, Palmira, 62493 Cuernavaca, Mor.')

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${description}&location=${location}`
    
    window.open(googleCalendarUrl, '_blank')
  }
  const events = [
    { time: '3:00 pm', title: '¡Llegada y Bienvenida!', icon: GiPartyPopper },
    { time: '3:30 - 4:30 pm', title: 'Hora de la Comida', icon: FaUtensils },
    { time: '4:30 - 5:00 pm', title: 'Juegos y Predicciones', icon: FaGamepad },
    { time: '5:00 pm', title: '¡EL GRAN MOMENTO!', icon: GiBalloons, highlight: true },
    { time: '5:00 - 5:30 pm', title: 'Revelación de Género', icon: GiBalloons },
    { time: '5:30 pm', title: '¡Momento del Pastel!', icon: FaBirthdayCake },
    { time: '6:00 - 7:00 pm', title: 'Fotos y Celebración', icon: FaCamera },
    { time: '7:00 pm', title: 'Despedida y Agradecimientos', icon: FaHandHoldingHeart },
  ]

  const phoneNumber = "7777900002"
  const message = "Hola! Confirmo mi asistencia a la revelación de género"
  const address = "Av. Palmira 204, Palmira\n62493 Cuernavaca, Mor."
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Av.+Palmira+204,+Palmira,+62493+Cuernavaca,+Mor."
  const wazeUrl = "https://waze.com/ul?q=Av.+Palmira+204,+Palmira,+62493+Cuernavaca,+Mor."

  const sendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const openGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank')
  }

  const openWaze = () => {
    window.open(wazeUrl, '_blank')
  }

  return (
    <div className="home-full-page">
      <div className="home-background-effects">
        <GiBalloons className="floating-icon icon-1" />
        <GiPartyPopper className="floating-icon icon-2" />
        <FaBaby className="floating-icon icon-3" />
        <FaHeart className="floating-icon icon-4" />
        <GiBalloons className="floating-icon icon-5" />
        <GiPartyPopper className="floating-icon icon-6" />
        <FaBaby className="floating-icon icon-7" />
        <FaHeart className="floating-icon icon-8" />
      </div>
      
      {/* Sección Principal */}
      <section className="home-hero-section">
        <div className="home-hero-card">
          <div className="home-emoji">
            <GiPartyPopper className="icon-celebration" />
          </div>
          <h1 className="home-main-title">¡Descubre el Secreto!</h1>
          <p className="home-subtitle">Revelación de Género</p>
          
          <div className="home-card">
            <h2 className="home-card-title">Sabado 3 de Enero</h2>
            <p className="home-card-subtitle">2026</p>
          </div>
        </div>
      </section>

      {/* Nombres de los Padres */}
      <section className="home-section parents-section">
        <div className="parents-card">
          <h1 className="parents-title">Con Amor</h1>
          <div className="parents-divider"></div>
          <div className="parents-names-container">
            <div className="parent-name">
              <FaUser className="parent-icon" />
              <h2 className="parent-name-text">Genaro González Ángeles</h2>
            </div>
            <div className="parents-heart">
              <FaHeart className="heart-icon" />
            </div>
            <div className="parent-name">
              <FaUserAlt className="parent-icon" />
              <h2 className="parent-name-text">Abril Caballero Salgado</h2>
            </div>
          </div>
          <p className="parents-subtitle">Te esperamos con mucha ilusión</p>
        </div>
      </section>

      {/* Código de Vestimenta */}
      <section className="home-section dresscode-section">
        <div className="dresscode-card">
          <h1 className="dresscode-title">CÓDIGO DE VESTIMENTA</h1>
          <div className="dresscode-divider"></div>
          <h2 className="dresscode-subtitle">¡Haz tu Predicción!</h2>
          <div className="dresscode-prediction">
            <div className="dresscode-option dresscode-boy">
              <div className="dresscode-emoji">
                <FaBaby className="baby-icon boy-icon" />
              </div>
              <h3 className="dresscode-option-title">¿Crees que es Niño?</h3>
              <p className="dresscode-option-text">¡Ven vestido de <strong>AZUL</strong>!</p>
            </div>
            <div className="dresscode-divider-vertical"></div>
            <div className="dresscode-option dresscode-girl">
              <div className="dresscode-emoji">
                <FaBaby className="baby-icon girl-icon" />
              </div>
              <h3 className="dresscode-option-title">¿Crees que es Niña?</h3>
              <p className="dresscode-option-text">¡Ven vestido de <strong>ROSA</strong>!</p>
            </div>
          </div>
          <p className="dresscode-description">
            Elige tu color según tu predicción y descubramos juntos el gran secreto
          </p>
        </div>
      </section>

      {/* Countdown */}
      <section className="home-section countdown-section">
        <div className="countdown-card">
          <h1 className="countdown-title">El Gran Día</h1>
          <div className="countdown-container">
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.days).padStart(2, '0')}</div>
              <div className="countdown-label">DÍAS</div>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.hours).padStart(2, '0')}</div>
              <div className="countdown-label">HRS</div>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.minutes).padStart(2, '0')}</div>
              <div className="countdown-label">MIN</div>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.seconds).padStart(2, '0')}</div>
              <div className="countdown-label">SEG</div>
            </div>
          </div>
          <p className="countdown-message">¡Comienza la cuenta regresiva!</p>
        </div>
      </section>

      {/* Reproductor de Música de Fondo */}
      <div className="background-music-container">
        <iframe
          ref={musicIframeRef}
          className="background-music-iframe"
          src="https://www.youtube.com/embed/ks689l5ohhw?autoplay=1&mute=0&loop=1&playlist=ks689l5ohhw&controls=0&showinfo=0&modestbranding=1&enablejsapi=1"
          title="Carlos Rivera - Te esperaba"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Itinerario */}
      <section className="home-section itinerary-section">
        <div className="itinerary-section-card">
          <h1 className="itinerary-header-title">Itinerario del Día</h1>
          
          {events.map((event, index) => {
            const IconComponent = event.icon
            return (
              <div key={index} className={`itinerary-event-card ${event.highlight ? 'itinerary-highlight' : ''}`}>
                <div className="itinerary-time-container">
                  <IconComponent className="itinerary-icon" />
                  <span className="itinerary-time">{event.time}</span>
                </div>
                <p className="itinerary-event-title">{event.title}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Ubicación */}
      <section className="home-section location-section">
        <div className="location-section-card">
          <h1 className="location-title">Ubicación</h1>
          
          <div className="location-map-card">
            <div className="location-address-container">
              <FaMapMarkerAlt className="location-pin-icon" />
              <p className="location-address">{address}</p>
            </div>
            
            <div className="location-map-container">
              <iframe
                className="location-map-iframe"
                src="https://www.google.com/maps?q=Av.+Palmira+204,+Palmira,+62493+Cuernavaca,+Mor.&output=embed"
                title="Ubicación del evento"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="location-buttons-container">
              <button 
                className="location-map-button location-google-button"
                onClick={openGoogleMaps}
              >
                <FaMapMarkerAlt className="location-button-icon" />
                <span className="location-button-text">Abrir Google Maps</span>
              </button>

              <button 
                className="location-map-button location-waze-button"
                onClick={openWaze}
              >
                <FaCar className="location-button-icon" />
                <span className="location-button-text">Abrir Waze</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmar Asistencia */}
      <section className="home-section rsvp-section">
        <div className="rsvp-card">
          <div className="rsvp-icon-container">
            <FaHandHoldingHeart className="rsvp-icon" />
          </div>
          
          <h1 className="rsvp-title">Confirmar Asistencia</h1>
          
          <div className="rsvp-divider"></div>
          
          <p className="rsvp-subtitle">
            "Tu presencia es el mejor regalo."
          </p>
          
          <p className="rsvp-instruction">
            Presiona el botón
          </p>
          
          <button 
            className="rsvp-button"
            onClick={sendMessage}
          >
            <FaComment className="rsvp-button-icon" />
            <div className="rsvp-button-text-container">
              <span className="rsvp-button-text">Mandar mensaje</span>
              <span className="rsvp-button-phone">{phoneNumber}</span>
            </div>
          </button>
        </div>
      </section>

      {/* Agregar a Calendario */}
      <section className="home-section calendar-section">
        <div className="calendar-card">
          <div className="calendar-icon-container">
            <FaHeart className="calendar-heart-icon" />
          </div>
          <h2 className="calendar-title">¡Celebremos Juntos!</h2>
          <p className="calendar-message">
            Un momento especial lleno de amor, emoción y sorpresas. Acompáñanos a descubrir
            <br />
            juntos el gran secreto de nuestro bebé.
          </p>
          <button 
            className="calendar-button"
            onClick={addToCalendar}
          >
            <FaCalendarPlus className="calendar-button-icon" />
            <span className="calendar-button-text">Agregar a mi Calendario</span>
          </button>
        </div>
      </section>
    </div>
  )
}
