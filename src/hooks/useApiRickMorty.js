import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useApiRickMorty = () => {

const [location, setLocation] = useState()

    useEffect(() => {
        const randomLocation = Math.ceil(Math.random() * 126)

        const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
        axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => console.log(err))
    }, [])

    console.log(location)

    return {location}
}

export default useApiRickMorty