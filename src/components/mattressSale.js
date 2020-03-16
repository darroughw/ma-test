import React from 'react'
import './mattressSale.scss'
import NectarMattress from '../images/nectar-mattress.png'

const MattressSale = props => {
    return (
        <div className="mattress-sale">
            <img src={NectarMattress} alt="Nectar Mattress" />
            <div className="sale-info">
                <h2>The Presidents Day Sale: Enjoy $100 Off Your Mattress!</h2>
                <a href="/">
                    <button className="mattress-btn">Check Price</button>
                </a>
            </div>
        </div>
    )
}

export default MattressSale
