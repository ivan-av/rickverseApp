import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentInfo = ({resident}) => {

  const [character, setCharacter] = useState()

  useEffect (() => {
      axios.get(resident)
      .then(res => setCharacter(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(resident)

  return (
    <article className='card__character'>
      <div className='character-info__container'>
        <img src={character?.image} alt="" />
        <h2>{character?.name}</h2>
        <p>{character?.status}</p>
        <p>{character?.status}</p>
        <p>{character?.status}</p>
      </div>
    </article>
  )
}

export default ResidentInfo