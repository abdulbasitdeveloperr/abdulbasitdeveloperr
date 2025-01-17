import React from 'react'
import { CgCodeSlash } from 'react-icons/cg'
import './Card.css'
const Card = (props) => {
    return (
        <div className='card'>
          <span>{props.cardIcon}</span>
            <h3>{props.cardHeading}</h3>
            <p>{props.cardDescription}</p>
        </div>
    )
}
export default Card