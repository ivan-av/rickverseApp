import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import useApiRickMorty from './hooks/useApiRickMorty'
import Loader from './components/Loader'

function App() {

const {location} = useApiRickMorty()

  return (
    <div className="App">
      {/* <Loader /> */}
      <Location location = {location}/>

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
