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
            <Row className="contact-icons-row">
              <Col className="contact-icons">
                <FontAwesomeIcon icon={faSquareEnvelope} size="lg"/>
              </Col>
              <Col className="contact-icons-texts">
                <p>bolosoka04@yahoo.com</p>
              </Col>  
            </Row>
            <Row className="contact-icons-row">
               <Col className="contact-icons">
                   <FontAwesomeIcon icon={faLocationPin} size="lg" />
              </Col>
              <Col className="contact-icons-texts">
                <p> Arepo Industrial estate,Km3 Lagos/shagamu express Arepo, Ogun State</p>
              </Col>
            </Row>
            <Row className="contact-icons-row">
               <Col className="contact-icons">
                 <FontAwesomeIcon icon={faPhoneVolume} size="lg" />
              </Col>
              <Col className="contact-icons-texts">
                <p>+2348030700430</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactComponent