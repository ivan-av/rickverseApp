import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'

function App() {

  const [location, setLocation] = useState()

  useEffect(() => {
    const randomLocation = Math.ceil(Math.random() * 126)
  
    const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [])
  
  console.log(location)

  return (
    <div className="App">
      <Location location = {location}/>
      <div>
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
