import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import useApiRickMorty from './hooks/useApiRickMorty'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {

const {location} = useApiRickMorty()

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* <Location / Dimension /> */}
      <Location location = {location}/>

      {/* Cards container */}
      <div className='app__cards'>
        {location?.residents.map(resident => (
          <ResidentInfo resident={resident}
          key={resident}
          />
        ))}
      </div>
    </div>
  )
}

export default App
