import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhoneVolume, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import './../../assets/styles/Contact.css'
const ContactComponent = () => {
  return (
    <div>
      <Container className="contact-details-cont">
        <Row>
          <Col>
             <h4>Contact Us</h4>
             <h5>BBA Ventures</h5>
             <p>(Maker of 1828 Cashew Nut)</p>
            <div className="contact-icons-row">
              <div className="">
                <FontAwesomeIcon icon={faSquareEnvelope} size="lg"/>
              </div>
              <div className="contact-icontext">
                <p>bolosoka04@yahoo.com</p>
              </div>  
            </div>
            <div className="contact-icons-row">
               <div className="">
                   <FontAwesomeIcon icon={faLocationPin} size="lg" />
              </div>
              <div className="contact-icontext">
                <p> Arepo Industrial estate,Km3 Lagos/shagamu express Arepo, Ogun State</p>
              </div>
            </div>
            <div className="contact-icons-row">
              <div>
                  <FontAwesomeIcon icon={faPhoneVolume} size="lg" />
              </div>
              <div className="contact-icontext">
                <p>+2348030700430</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactComponent