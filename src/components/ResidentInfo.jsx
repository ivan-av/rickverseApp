import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'


const ResidentInfo = ({resident}) => {

  const character = useCharacterApi(resident)

  return (
    <article className='card__character'>
      <div className='character-info__container'>
        <img src={character?.image} alt="" />
        <h2>{character?.name}</h2>
        <p>Status: {character?.status}</p>
        <p>Origin: {character?.origin.name}</p>
        <p>Episode where appears: {character?.episode.length}</p>
      </div>
    </article>
  )
}

export default ResidentInfo