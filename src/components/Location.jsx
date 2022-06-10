import React, { useState } from 'react'

// Card of the random location rendered, its going to be rendered only one time
const Location = ({location}) => {

	const [inputText1, setInputText1] = useState('')

const onChangeInput = e => {
    setInputText1(e.target.value)
    }

	const [inputText2, setInputText2] = useState('')

	const onSubmitFunction = (e) => {
			e.preventDefault()
			setInputText2(e.target.children[0].value)
	}
	
	return (
    <article className='card__location'>
			
			<div className='location-info__container'>
				{/* Info about the random location rendered */}
				{/* Name of the location, e.g.Earth */}
				<h2>{location?.name}</h2>
				<ul>
					{/*Type of location */}            
					<li><span>Type: {location?.type}</span></li>
					{/*Dimension where belongs the location */}            
					<li><span>Dimension: {location?.dimension}</span></li>
					{/*Number of residents in the location */}            
					<li><span>Population: {location?.residents.length}</span></li>
				</ul>
			</div>

			<div className='location-input__container'>
				{/* controled */}
				<form>
						<input 
						value={inputText1}
						onChange={onChangeInput}
						type="text" 
						/>
				</form>

				{/* no controled */}
				<form onSubmit={onSubmitFunction} action="">
							<input  type="text" />
							<button>Print Text</button>
							<h1>{inputText2}</h1>
				</form>
			</div>

    </article>
  )
}

export default Location