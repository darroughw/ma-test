import React from 'react'
import './testimonials.scss'

const Testimonials = props => {
    
    return (
        <div className="testimonials">
            <h2>What Nextar Customers Have to Say</h2>
            <div className="users">
            {props.messages.map((message) => (
                <div className="user-testimonial">
                    <p className="user-content">{message.copy}</p>
                    <div className="user">
                        <img src={message.image} className="user-image" alt={message.user} />
                        <p className="user-name">{message.user}</p>
                    </div>
                </div>
            ))}
            </div>
            <a href="/">
                <button className="mattress-btn-outline">Read more reviews</button>
            </a>
        </div>
    )
}

export default Testimonials
