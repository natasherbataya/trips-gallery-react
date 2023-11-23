import React from 'react'
import './GalleryCard.css'

function GalleryCard(props) {
  return (
    <li className='card__img' 
    style={{backgroundImage: `url(${props.image})`,
    backgroundRepeat: 'no-repeat'}}>
    <div className='card__wrapper'>
        <div className='card__transport'>
            <p className='card__transport-subtitle'>{props.transport}</p>
            { props.isPeopleQuantity && <div className='card__transport-subtitle after'>{props.peopleQuantity}</div>}
            
        </div>
    <p className='card__title'>{props.title}, {props.month} — {props.price}</p>
    </div>
        
    </li>
   );
}

export default GalleryCard