import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useApiRickMorty = searchLocation => {

const [location, setLocation] = useState()

    useEffect(() => {
        let locationNumber
        if(searchLocation === undefined){
            locationNumber = Math.ceil(Math.random() * 126)
        } else {
            locationNumber = searchLocation
        }
        const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`
        
        axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => console.log(err))
    }, [searchLocation])

    return location
}

export default useApiRickMorty