import React from 'react'
import './PricingCard.css'


const PricingCard = ({openModal, plan, id, flag}) => {
    return (
        <>
        {flag 
        ? (
            <div className='single_card'>
            <div className={`popular_row ${id === 1 ? 'poplular_active' : ''}`}>
                Most Popular!
            </div>
            <div className='card_header'>
                {plan.name}
            </div>
            <div className={`card_body ${id === 1 ? 'active_back' : ''}`}>
                <div className='card_body_inner_wrapper'>
                    <h1 className='price_header'>{plan.price_per_transfer}</h1>
                    <p className='text_only_top'>Pre Qualified lead</p>
                    <p className='border_row text_only'>Qualified Leads Pre Month</p>
                    <p className='number_only'>{plan.leads_pre_month}</p>
                    <p className='border_row text_only'>Platform Fee Pre Month</p>
                    <p className='number_only'>{plan.platform_price}</p>
                </div>
            </div>
            <div className='card_footer'>
                {plan.final_price}/mo
            </div>
            <div className='card_footer_button'>
                <button onClick={() => {openModal(plan.name)}} className={`${id === 1 ? 'poplular_btn_active' : ''}`}>Start Your Trial</button>
            </div>
        </div>
        )
        : (
            <div className='single_card'>
            <div className={`popular_row`}>
                Most Popular!
            </div>
            <div className='card_header'>
                Enterprise
            </div>
            <div className={`card_body active_back enterprise_card`}>
                {/* <div className='card_body_inner_wrapper'> */}
                    {/* <h1 className='price_header'></h1> */}
                    <p className='text_only_top_enterprise'>Want more than 80 qualified leads each month?</p>
                    {/* <p className='border_row text_only'>Qualified Leads Pre Month</p>
                    <p className='number_only'></p>
                    <p className='border_row text_only'></p>
                    <p className='number_only'></p> */}
                {/* </div> */}
            </div>
            <div className='card_footer_button'>
                <button onClick={openModal} className={`${id === 1 ? 'poplular_btn_active' : ''}`}>Get In Touch</button>
            </div>
        </div>
        )
        
    }
        
        </>
    )
}


export default PricingCard
