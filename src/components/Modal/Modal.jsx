/* eslint-disable react/prop-types */
import './../../assets/styles/Modal.css'


const Modal = ({ image, message, buttonText }) => {
  
    
  return (
      <div className="modalFull">
        <div className="modalCont">
          <img src={image}   alt="Sucess Icon" className="modalImg"/>
          <h3>{message}</h3>
        <div >
          <a className='button' href="/">{buttonText}</a></div>
        </div>
    </div>
  )
}

export default Modal
