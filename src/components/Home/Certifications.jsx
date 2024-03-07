import { Container, Row, Col } from 'react-bootstrap'
import './../../assets/styles/Certifications.css'
const Certifications = () => {
  return (
      <Container className='certContainer' fluid>
          <h4 className='certTitle'>OUR CERTIFICATIONS</h4>
          <Row className='certImages'>
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709741818/1828Cashew/Nafdac_nvfa4s.png" alt="" className='nafdacImg'/>
              
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709741815/1828Cashew/son_fo0goq.png" alt="" className='nafdacImg'/>
             
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709741816/1828Cashew/Ncan_f9i3lm.png" alt="" className='nafdacImg'/>
          </Row>
          <Row className='certTextsRow'>
              <Col>
                  <h4 className='certTexts'>4</h4>
                  <h4 className='certTexts'>Storehouses</h4>
              </Col>
              <Col>
                <h4 className='certTexts'> 50+</h4>
                  <h4 className='certTexts'>Employees</h4>
              </Col>
              <Col>
                  <h4 className='certTexts'>40,000</h4>
                  <h4 className='certTexts'>Tonnes Exported</h4>
              </Col>
              <Col>
                  <h4 className='certTexts'>40+</h4>
                  <h4 className='certTexts'> Export Countries</h4>
              </Col>
          </Row>
      
    </Container>
  )
}

export default Certifications
