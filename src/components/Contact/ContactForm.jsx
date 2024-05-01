import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Row, Col } from 'react-bootstrap'
import MessageModal from '../Modal/MessageModal';

const ContactForm = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const formValues = {
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    emailjs.send('service_clxgzcl', 'template_2sdehvm', formValues, '_p4SGIb-nxesFjcJT')
      .then((result) => {
        console.log(result.text);
        setIsModalOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div>
      <Form className='contact-form-Section' ref={form} onSubmit={sendMessage}>
        <Row>
          <Col>
            <Form.Control
              type='text'
              size="md"
              placeholder="First name"
              className="formName"
              name="firstname"
              required
            />
          </Col>
          <Col>
            <Form.Control
              type='text'
              placeholder="Last name"
              className="formName"
              name="lastname"
              required
            />
          </Col>
        </Row>
      
        <Form.Group className="mb-3 formBox" controlId="formBasicEmail">
          <Form.Control
            size="md"
            type="email"
            placeholder="Email"
            className='formWrite'
            name='email'
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 formBox" controlId="formBasicEnteMessage">
          <Form.Control
            size="md"
            as="textarea"
            rows={12}
            name="message"
            placeholder="Enter message here"
            required
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" className="form-button">
          SUBMIT
        </Button>
      </Form>
    
      {isModalOpen && (
        <div className="modal-overlay">
          <MessageModal onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  )
}

export default ContactForm