import React from 'react'
import './coupon.scss';

const Coupon = props => {
    return (
        <div className="mattress-coupon">
            <h4>{props.title}</h4>
            <h5>{props.body}</h5>
            <div className="btn-container">
                <a href="/">
                    <button className="mattress-btn">{props.cta}</button>
                </a>
            </div>
        </div>
    )
}

export default Coupon