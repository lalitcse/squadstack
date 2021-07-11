import React from 'react'
import './PricePill.css'

const PricePill = ({ price, active, pillClicked, index }) => {
    return (
        <div onClick={(e) => {pillClicked(e,index)}} className={`pill_box ${active === index ? 'pill_active' : ''}`}>
            {price}
        </div>
    )
}

export default PricePill
