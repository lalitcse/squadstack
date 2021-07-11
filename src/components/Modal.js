import React, {useState} from 'react'
import ReactDOM from "react-dom";
import './Modal.css'

const Modal = ({ showModal, closeModal, modalName }) => {
    const modal_form = {
        modal_name: '',
        modal_phone: '',
        modal_email: '',
        modal_leads_in_month: '',
        modal_total_leads_CRM: '',
        modal_crm: '',
        modal_agents: '',
      };
    
      const [form, setForm] = useState(modal_form);

      const handleChange = (value, key) => {
          switch (key){
              case 'modal_name':
                setForm((prev_state) => {
                    return {...prev_state, modal_name: value}
                })
                break

                case 'modal_phone':
                setForm((prev_state) => {
                    return {...prev_state, modal_phone: value}
                })
                break

                case 'modal_email':
                setForm((prev_state) => {
                    return {...prev_state, modal_email: value}
                })
                break
                case 'modal_leads_in_month':
                setForm((prev_state) => {
                    return {...prev_state, modal_leads_in_month: value}
                })
                break
                case 'modal_total_leads_CRM':
                setForm((prev_state) => {
                    return {...prev_state, modal_total_leads_CRM: value}
                })
                break
                case 'modal_crm':
                setForm((prev_state) => {
                    return {...prev_state, modal_crm: value}
                })
                break
                case 'modal_agents':
                setForm((prev_state) => {
                    return {...prev_state, modal_agents: value}
                })
                break

          }
      }

      const submitClicked = () => {
          alert(JSON.stringify(form))
      }

    return ReactDOM.createPortal(
        <>
        <div id="open-modal" className={showModal ? "modal-window modal-window-open" : "modal-window" }>
            <div>
                <div className='modal__header'>
                    <div className='modal__header-innerbox row'>
                        <div className='col-sm-11' style={{textAlign:'center'}}><h4 className='get_started'>Get Started with SquadVoice</h4></div>
                        <div className='col-sm-1 close_wrapper'>
                            <a  className="close-icon" onClick={closeModal} >x</a>
                        </div>
                    </div>
                </div>
                <div className='modal__form_wrapper'>
                    <form>
                        <div className='modal__form'>
                            <label className='selected_plan'>Plan Selected :</label> <label>{modalName}</label>
                        </div>
                        <div className='modal__form'>
                            <label>Name</label> <br />
                            <input onChange={(e) => handleChange(e.target.value, 'modal_name')}  type="text" name="name" value={form.modal_name} />
                        </div>
                        <div className='row modal__form'>
                            <div className='col-sm-6'>
                                <label>E-mail Address</label> <br />
                                <input onChange={(e) => handleChange(e.target.value, 'modal_email')}     type="email" name="email" />
                            </div>
                            <div className='col-sm-6'>
                                <label htmlFor="">Phone no.</label> <br />
                                <input onChange={(e) => handleChange(e.target.value, 'modal_phone')}    type="number" name="phone" />
                            </div>
                        </div>
                        <div className='row modal__form'>
                            <div className='col-sm-6'>
                                <label>Number of leads you generated in a month</label> <br />
                                <input onChange={(e) => handleChange(e.target.value, 'modal_leads_in_month')}   type="number" name="lead_in_month" />
                            </div>
                            <div className='col-sm-6'>
                                <label>Total leads in your CRM</label> <br />
                                <input onChange={(e) => handleChange(e.target.value, 'modal_total_leads_CRM')}    type="number" name="total_lead" />
                            </div>
                        </div>
                        <div className='row modal__form'>
                            <div className='col-sm-6'>
                                <label>Which CRM do you use?</label> <br />
                                <input onChange={(e) => handleChange(e.target.value, 'modal_crm')}   type="number" name="CRM_use" />
                            </div>
                            <div className='col-sm-6'>
                                <label>Number of agents</label> <br />
                                <input onChange={(e) => handleChange(e.target.value, 'modal_agents')}    type="number" name="agents" />
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-sm-12 form_radio'>
                                <label>What are your biggest lead source ?</label> <br />
                                    <input type="radio" name="radio" />
                                    <label>Zillow</label>
                                    <input type="radio" name="radio" />
                                    <label>Realtor</label>
                                    <input type="radio" name="radio" />
                                    <label>Ylopo</label>
                                    <input type="radio" name="radio" />
                                    <label>Others</label>
                            </div>
                        </div>
                        <div className='row '>
                            <div className='col-sm-12 form_radio'>
                                <label>How did you hear about us ?</label> <br />
                                <input type="radio" name="radio" />
                                <label>Google</label>
                                <input type="radio" name="radio" />
                                <label>Facebook</label>
                                <input type="radio" name="radio" />
                                <label>Email</label>
                                <input type="radio" name="radio" />
                                <label>Friends</label>
                                <input type="radio" name="radio" />
                                <label>Real Closers</label>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => {submitClicked()}}  className='modal__btn' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>,
        document.getElementById('modal')
    )
}

export default Modal
