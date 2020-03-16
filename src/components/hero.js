import React from 'react'
import StarRating from './starRating'
import Coupon from './coupon'
import './hero.scss';
import BrandLogo from '../images/nectar-sleep-logo-vector.svg'
import BlockImage from '../images/nectar-legend-hero.png'

const hero = props => {

    const starsCustomer = [
        {
            state: 'starOn'
        },
        {
            state: 'starOn'
        },
        {
            state: 'starOn'
        },
        {
            state: 'starOn'
        },
        {
            state: 'starOn'
        }
    ]

    const starsMa = [
        {
            state: 'starOn'
        },
        {
            state: 'starOn'
        },
        {
            state: 'starOn'
        },
        {
            state: 'starOn'
        },
        {
            state: 'starOff'
        }
    ]

    const couponInfo = {
        title: 'Current Promotion:',
        body: 'The Presidents Day Sale: Enjoy $100 Off Your Mattress!',
        cta: 'Check Price'
    }

    return (
        <div className="mattress-hero">
            <h1>{props.best}
            <img src={BrandLogo} className="brand-logo" /></h1>
            <div className="best-value-block">
                <div className="block-container" style={{
                    backgroundImage:`url(${BlockImage})`
                }}>
                    <div className="block-copy">
                        <h2>{props.headline}</h2>
                        <h3>{props.headlineSub}</h3>
                    </div>
                </div>
            </div>
            <div className="best-value-info">
                <div>
                    <h4>Customer Rated:</h4>
                    <StarRating stars={starsCustomer} />
                    <h5>4.8 <span className="out-of">/5</span></h5>
                    <a href="/" className="cta-reviews">Read Reviews ></a>
                </div>
                <div>
                    <h4>MA Score:</h4>
                    <StarRating stars={starsMa} />
                    <h5>8.7 <span className="out-of">/10</span></h5>
                    <a href="/" className="cta-reviews">See Why ></a>
                </div>
                <Coupon {...couponInfo} />
            </div>
        </div>
    )
}

export default hero