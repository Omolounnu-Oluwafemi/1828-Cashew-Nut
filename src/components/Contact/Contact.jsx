import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
const ContactComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
             <h3>Contact Us</h3>
             <h3>BBA Ventures</h3>
             <p>(Maker of 1828 Cashew Nut)</p>
            <Row>
              <Col>
                <FontAwesomeIcon icon={faLocationPin} size="lg" />
              </Col>
              <Col>
                <p>bolosoka04@yahoo.com</p>
              </Col>  
            </Row>
            <Row>
              <Col>
                  <FontAwesomeIcon icon={faPhoneVolume} size="lg" />
              </Col>
              <Col>
                <p> Arepo Industrial estate,Km3 Lagos/shagamu express Arepo, Ogun State</p>
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
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