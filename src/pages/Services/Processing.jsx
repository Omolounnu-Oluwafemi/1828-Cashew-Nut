/* eslint-disable react/prop-types */
import { useState } from 'react';    
import ServicesCarousel from './../../components/Services/ServicesCarousel'
import { imageData } from './../../assets/data/ServicesImages'
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import MessageModal from '../../components/Modal/MessageModal';


const Processing = () => {

    const images = imageData;

    return (
        <div>
        <ServiceHero title={"Cashew Processing"} />
        <ServicesCarousel images={images} />
        <Section2 column1header={"Shelling and kernel extraction"} column1Text={"The harvested cashew nut are shelled and extracted into edible kernel"} column2header={"Grading and Sourcing"} column2Text={"The kernel are then grades based on their size, color and quality"} column3header={"Roasting and processing"} column3Text={"The cashew nut undergo a process of roasting and salting to add flavour"} column4header={"Packaging and storage"} column4Text={"The nuts are put in an enclosed vacuum for prolong shelf life "} />
        <Section3/>
        </div>
    )
  }

export default Processing

export const Section3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      To: 'oluwafemiomolounnu@gmail.com',
      From: 'sammiebeechh@gmail.com',
      Subject: formData.subject,
      Body: `
            <h1>New Message</h1>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `,
    }).then(() => {
      setIsModalOpen(true);
      // Clear form data after submission 
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }).catch(() => { 
      alert('An error occurred, please try again');
    });
  };

  return (
    <div className='servicesSection3'>
      <Container className='servicesSection3Cont'>
        <Row className='servicesSection3Row'>
          <Col className=''>
            <h5 className='servicesSection3H5'> Reliable</h5>
            <p className='servicesSection3P'>We supply our customers all round the year.</p>
          </Col>
          <Col >
            <h5>High Quality</h5>
            <p>We produce high quality cashew nut with machines that can grade, sort and package our products</p>
          </Col>
          <Col className=''>
            <h5>Trust</h5>  
            <p>Transparency and accountability to our customers throughout the supply has made customers have so much confidence and trust in us.</p>
          </Col>
        </Row>
      </Container>

      <Form className='servicesSection3Form' onSubmit={sendMessage}>
      <h3>For more information</h3>
      <Form.Group className="mb-3 formBox" controlId="formBasicName">
          <Form.Control
            size="md"
            type='text'
            name='name'
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className='formWrite'
            required
          />
      </Form.Group>

      <Form.Group className="mb-3 formBox" controlId="formBasicEmail">
          <Form.Control
            size="md"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className='formWrite'
            required
          />
      </Form.Group>

      <Form.Group className="mb-3 formBox" controlId="formBasicSubject">
          <Form.Control
            size="md"
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className='formWrite'
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

      <Button variant="primary" type="submit">
        Submit
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

 export const Section2 = ({column1header, column1Text, column2header, column2Text, column3header, column3Text,  column4header, column4Text}) => {

  return (
    <>
      <Container fluid className='ServiceSection2'>
        <Row className='serviceSection2Row1'>
          <Col className='ServiceSection2Col1'>
            <h5>{column1header}</h5>
            <p>{column1Text}</p>
          </Col>
          <Col className='ServiceSection2Col1'>
             <h5>{column2header}</h5>
            <p>{column2Text}</p>
          </Col>
        </Row>
         <Row className='serviceSection2Row2'>
          <Col className='ServiceSection2Col1'>
             <h5>{column3header}</h5>
            <p>{column3Text}</p>
          </Col>
          <Col className='ServiceSection2Col1'>
             <h5>{column4header}</h5>
            <p>{column4Text}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
  
 };

export const ServiceHero = ({title}) => {
  return (
    <>
      <div className="servicesHero">
        <div className='servicesTextDiv'>
          <h1>{ title}</h1>
        </div>
      </div>
    </>
   )
 }
