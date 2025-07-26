'use client'

import { useState } from 'react'

export default function WeatherCard() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const fetchWeather = async () => {
    const res = await fetch(`http://localhost:8000/weather?city=${city}`)
    const data = await res.json()
    setWeather(data)
  }

  return (
    <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md max-w-md">
      <h2 className="text-xl font-bold mb-2">Check Weather</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="p-2 border rounded w-full mb-2"
      />
      <button onClick={fetchWeather} className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Weather
      </button>
      {weather && (
        <div className="mt-4">
          <p><strong>Location:</strong> {weather.location}</p>
          <p><strong>Temperature:</strong> {weather.temperature}°C</p>
          <p><strong>Description:</strong> {weather.description}</p>
        </div>
      )}
    </div>
  )
}
