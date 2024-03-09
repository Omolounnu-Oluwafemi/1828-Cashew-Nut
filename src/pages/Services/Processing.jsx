    import ServicesCarousel from './../../components/Services/ServicesCarousel'
    import { imageData } from './../../assets/data/ServicesImages'
    import { Col, Container, Row } from 'react-bootstrap';
    const Processing = () => {

    const images = imageData;

    return (
        <div>
        <ServiceHero title={"Cashew Nut Processing"} />
        <ServicesCarousel images={images} />
        <Section2 column1={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor quas a ratione illum ipsam reprehenderit commodi necessitatibus! Ab, eum."} column2={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor quas a ratione illum ipsam reprehenderit commodi necessitatibus! Ab, eum."}  column3={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor quas a ratione illum ipsam reprehenderit commodi necessitatibus! Ab, eum."} column4={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolor quas a ratione illum ipsam reprehenderit commodi necessitatibus! Ab, eum."} />
        </div>
    )
  }

export default Processing
    

 export const Section2 = ({column1, column2, column3, column4}) => {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>{column1}</h3>
          </Col>
          <Col>
            <h3>{column2}</h3>
          </Col>
        </Row>
         <Row>
          <Col>
            <h3>{column3}</h3>
          </Col>
          <Col>
            <h3>{column4}</h3>
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
