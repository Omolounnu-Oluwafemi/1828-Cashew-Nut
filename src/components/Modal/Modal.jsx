/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap"
import './../../assets/styles/Modal.css'


const Modal = ({image, message, buttonText}) => {
  return (
      <div className="modalFull">
        <div className="modalCont">
          <img src={image}   alt="Sucess Icon" className="modalImg"/>
          <h3>{message}</h3>
          <Button>{buttonText}</Button>
        </div>
    </div>
  )
}

export default Modal
