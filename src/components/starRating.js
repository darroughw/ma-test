import React from 'react'
import './starRating.scss';
import Star from '../images/star.svg'

const starRating = props => {

    if(!props.stars) {
        return null;
    }

    return (
        <div className="star-rating">
            {props.stars.map((star) => (
                <img src={Star} className={star.state} alt={star.state} />
            ))}
        </div>
    )
}

export default starRating
