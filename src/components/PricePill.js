import React from 'react'
import './PricePill.css'
import PropTypes from 'prop-types'

const PricePill = ({ price, active, pillClicked, index }) => {
    return (
        <div onClick={(e) => {pillClicked(e,index)}} className={`pill_box ${active === index ? 'pill_active' : ''}`}>
            {price}
        </div>
    )
}

PricePill.propTypes = {
    price: PropTypes.string,
    active: PropTypes.number
}

export default PricePill
