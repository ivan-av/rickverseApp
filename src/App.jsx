import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import useApiRickMorty from './hooks/useApiRickMorty'
import Loader from './components/Loader'
import Header from './components/Header'
import InputSearch from './components/InputSearch'

function App() {

const [searchLocation, setSearchLocation] = useState()

const location = useApiRickMorty(searchLocation)

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <InputSearch setSearchLocation={setSearchLocation}/>

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
