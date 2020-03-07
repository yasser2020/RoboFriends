import React from 'react'

const Card=({id,name,email})=>{
	return(

            <div className='tc bg-light-green dib pa3 ma3 grow br2 shadow-5'>
                  <img alt='Robots' width='200' src={`https://robohash.org/${id}&200x200`} />
               
                  <div>
	                  <h2>{name}</h2>
	                  <p>{email}</p>
	              </div>
            </div>
		)
}

export default Card;