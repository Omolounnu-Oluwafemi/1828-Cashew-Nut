import {Form, Button, Row, Col} from 'react-bootstrap'

const ContactForm = () => {
  return (
    <div>
       <Form className='contact-form-Section'>
        <Row>
            <Col>
            <Form.Control size="md" placeholder="First name" className="formName"/>
            </Col>
            <Col>
            <Form.Control placeholder="Last name" className="formName"/>
            </Col>
        </Row>
        
        <Form.Group className="mb-3 formBox" controlId="formBasicEmail">
          <Form.Control  size="md" type="email" placeholder="Email" className='formWrite'/>
        </Form.Group>

        <Form.Group className="mb-3 formBox" controlId="formBasicEnteMessage">
          <Form.Control size="md" as="textarea"  rows={8} placeholder="Enter message here" />
        </Form.Group>
          
        <Button variant="primary" type="submit" className="form-button">
          SUBMIT
        </Button>
    </Form>
    </div>
  )
}

export default ContactForm
