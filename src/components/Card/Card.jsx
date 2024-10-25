import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='card-container'>
            <i className={`bi ${props.card_icon}`} />
            <div className='card-details'>
                <span className='detail'>{props.card_detail}</span>
                <span className='value'>{props.card_value}</span>
            </div>
        </div>
    )
}

export default Card