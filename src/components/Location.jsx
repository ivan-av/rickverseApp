import React, { useState } from 'react'

// Card of the random location rendered, its going to be rendered only one time
const Location = ({location}) => {

	
	return (
    <article className='card__location'>
			
			<div className='location-info__container'>
				{/* Info about the random location rendered */}
				
					<div></div>
					{/* Name of the location, e.g.Earth */}
					<h2 className='location-info__title'>{location?.name}</h2>

					<div className='location-info__details'>
						<div className='location-info__details-child'>
							{/*Type of location */}            
							<span><b>Type:</b> {location?.type}</span>
						</div>

						<div>
						{/*Dimension where belongs the location */}            
							<span><b>Dimension:</b> {location?.dimension}</span>
						</div>

						<div>
						{/*Number of residents in the location */}            
							<span><b>Population:</b> {location?.residents.length}</span>
						</div>
				</div>

			</div>

    </article>
  )
}

export default Location