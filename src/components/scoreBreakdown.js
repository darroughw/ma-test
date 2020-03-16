import React, { useState } from 'react'
import StarRating from './starRating'
import './scoreBreakdown.scss'
import Chevron from '../images/chevron.svg'

const ScoreBreakdown = props => {

    let [showMore, setShowMore] = useState(true);

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

    const moreToggle = () => {
        const scrollTable = document.getElementById('breakdown-table').firstElementChild;
        const scrollChevron = document.getElementById('more-chevron');
        if(showMore){
            scrollTable.classList.add('end-table');
            scrollChevron.classList.add('table-start');
            setShowMore(false);
        } else {
            scrollTable.classList.remove('end-table');
            scrollChevron.classList.remove('table-start');
            setShowMore(true);
        }
    }

    return (
        <div className="score-breakdown">
            <h2>Total Score for the Nectar Mattress</h2>
            <div className="score">
                <h5>8.7</h5>
                <h5 className="out-of">/10</h5>
                <StarRating stars={starsMa} />
            </div>
            <div className="test-scores">
                <h6>Test score breakdown (out of 10)</h6>
                <div className="table-container">
                    <div id="breakdown-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>9</th>
                                    <th>10</th>
                                    <th>8</th>
                                    <th>10</th>
                                    <th>10</th>
                                    <th>10</th>
                                    <th>8.5</th>
                                    <th>10</th>
                                    <th>10</th>
                                    <th>10</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shipping</td>
                                    <td>Return Policy</td>
                                    <td>Warranty</td>
                                    <td>Motion Transfer</td>
                                    <td>Presure Relief</td>
                                    <td>Responsiveness</td>
                                    <td>Cooling</td>
                                    <td>Comfort</td>
                                    <td>Sleep Quiltiy</td>
                                    <td>Snoring</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="more-table">
                            <button className="mattress-btn-ghost" onClick={e => {moreToggle()}}>
                                <img id="more-chevron" src={Chevron} alt="More" />
                                <p>More</p>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBreakdown
