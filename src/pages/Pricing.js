import React, { useEffect, useState } from 'react'
import PricePill from '../components/PricePill'
import PricingCard from '../components/PricingCard'
import Modal from '../components/Modal'
import './Pricing.css'

const Pricing = () => {
    const [allData, setAllData] = useState({})
    const [showModal, setShowModal] = useState(false);
    const [cardData, setCardData] = useState([])
    const [modalName, setModalName] = useState('')
    let tab_price = [
        { id: 1, rate: '$100k-$200k' },
        { id: 2, rate: '$200k-$300k' },
        { id: 3, rate: '$300k-$400k'},
        { id: 4, rate: '$400k-$500k' },
        { id: 5, rate: '$500k+' },
    ]
    const [activeTab, setActiveTab] = useState({
        active_index: {id: 3, rate: "$300k-$400k"},
        price : tab_price
    })

    const openModal = (name) => {
        console.log(name)
        setShowModal(true)
        setModalName(name)
      }
  
    const closeModal = () => {
        setShowModal(false)
    }

    const pillClicked = (e, index) => {
        let _index = index - 1
        setActiveTab({...activeTab, active_index: activeTab.price[_index]})
        localStorage.setItem('active_index', JSON.stringify(activeTab.price[_index]));
        setCardData(allData[e.target.innerText].plan_info)
    }

    useEffect(() => {
        var retrievedObject = localStorage.getItem('active_index');

        fetch('data.json')
        .then(resp => resp.json())
        .then(data => {
            setAllData(data)
            setCardData(data[JSON.parse(retrievedObject).rate].plan_info)
        })

        if(retrievedObject !== null){
            setActiveTab({...activeTab, active_index: JSON.parse(retrievedObject)})
        }

    }, [])
    return (
        <>
            <div className='row'>
                <div className='col-sm-12 d-flex pill_wrapper'>
                    {
                      activeTab.price.map((item) => (
                          <PricePill active={activeTab.active_index.id} pillClicked={pillClicked} price={item.rate} index={item.id} key={item.id} />
                      ))  
                    }
                </div>
            </div>
            <div className='row card_outer_wrapper'>
                <div className='col-sm-12 d-flex card_wrapper'>
                    {
                        cardData.map((plan, index) => (
                            <PricingCard openModal={openModal} plan={plan} key={index} id={index} flag={true} />
                        ))
                    }
                    <PricingCard openModal={openModal} flag={false}  />
                </div>
            </div>
            <Modal modalName={modalName}  showModal={showModal} closeModal={closeModal} />
        </>
    )
}

export default Pricing
