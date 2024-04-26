import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import MessageModal from '../Modal/MessageModal';

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => { 
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const sendMessage = (e) => {
    e.preventDefault();

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "sammiebeechh@gmail.com",
      Password: "7DAFCCF89529A82AB68CA2213E2CD1FEE88B",
      To: 'bbaventures93@gmail.com',
      From: `${formData.email}`,
      Subject: `New Message from: ${formData.firstname} ${formData.lastname}`,
      Body: `
            <h1>New Message</h1>
            <p><strong>Name:</strong> ${formData.firstname} ${formData.lastname}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `,
    }).then(() => {
      setIsModalOpen(true);
      // Clear form data after submission 
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
      });
    });
  };

  return (
    <div>
       <Form className='contact-form-Section' onSubmit={sendMessage}>
        <Row>
            <Col>
            <Form.Control
              type='text'
              size="md"
              placeholder="First name"
              className="formName"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            </Col>
            <Col>
            <Form.Control
              type='text'
              placeholder="Last name"
              className="formName"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
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
