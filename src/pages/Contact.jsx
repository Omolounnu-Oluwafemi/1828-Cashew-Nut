import ContactForm from "../components/Contact/ContactForm"
import ContactComponent from "./../components/Contact/Contact"
import { Row, Col } from 'react-bootstrap'
import './../assets/styles/Contact.css'


const Contact = () => {
  return (
    <>
      <Row className="contactCont">
        <Row className="inner-contactCont">
        <Col>
          <ContactComponent />
        </Col>
        <Col>
          <ContactForm/>
        </Col>
        </Row>
      </Row>
    </>
  )
}

export default Contact
