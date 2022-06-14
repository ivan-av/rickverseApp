import React from 'react'
import { useState } from 'react'

const InputSearch = ({setSearchLocation}) => {
    


    const searchLocation = e => {
    e.preventDefault()
    setSearchLocation(e.target.children[0].value)
    }

    return (
    <form onSubmit={searchLocation} className='location-input__container'>
        <input type="text"/>
        <button className='location-input__button'>Search</button>
    </form>
  )
}

export default InputSearch