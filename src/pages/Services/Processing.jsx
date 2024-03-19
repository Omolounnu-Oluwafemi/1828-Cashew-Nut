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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

   const handleSubmit = (event) => {
    event.preventDefault();

    // Access form data from state variables
    const formData = {
      name,
      email,
      subject,
      message,
    };

    console.log('Form submitted!');
     console.log('Form Data:', formData);
     if (formData) { 
    setIsModalOpen(true);
  }

    // You can now send data to your server here using fetch or Axios
    // Example using fetch (replace with your actual server endpoint):
    // fetch('https://your-server-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Server response:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error submitting form:', error);
    //   });

    // Clear form data after submission (optional)
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
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

       <Form className='servicesSection3Form'>
      <h3>For more information</h3>
      <Form.Group className="mb-3 formBox" controlId="formBasicName">
        <Form.Control size="md" type='name' placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} className='formWrite'/>
      </Form.Group>

      <Form.Group className="mb-3 formBox" controlId="formBasicEmail">
        <Form.Control  size="md" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} className='formWrite'/>
      </Form.Group>

      <Form.Group className="mb-3 formBox" controlId="formBasicSubject">
        <Form.Control size="md" type="text" placeholder="Subject" value={subject} onChange={(event) => setSubject(event.target.value)} className='formWrite'/>
      </Form.Group>

      <Form.Group className="mb-3 formBox" controlId="formBasicEnteMessage">
        <Form.Control size="md" as="textarea"  rows={12} placeholder="Enter message here" value={message} onChange={(event) => setMessage(event.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
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
