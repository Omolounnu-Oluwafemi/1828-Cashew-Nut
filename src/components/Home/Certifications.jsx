import { Container, Row, Col } from 'react-bootstrap'
import './../../assets/styles/Certifications.css'
const Certifications = () => {
  return (
      <Container className='certContainer' fluid>
          <h4 className='certTitle'>OUR CERTIFICATIONS</h4>
          <Row className='certImages'>
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709741818/1828Cashew/Nafdac_nvfa4s.png" alt="" className='nafdacImg'/>
              
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1714152464/1828Cashew/image_29_hdyc6m.png" alt="" className='nafdacImg'/>
             
                <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709741816/1828Cashew/Ncan_f9i3lm.png" alt="" className='nafdacImg' />
              
                <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1714152464/1828Cashew/image_27_txi0py.png" alt="" className='nafdacImg'/>
          </Row>
          <Row className='certTextsRow'>
              <Col>
                  <h4 className='certTexts'>2</h4>
                  <h4 className='certTexts'>Storehouses</h4>
              </Col>
              <Col>
                <h4 className='certTexts'> 200+</h4>
                  <h4 className='certTexts'>Employees</h4>
              </Col>
              <Col>
                  <h4 className='certTexts'></h4>
                  <h4 className='certTexts'>Exportation in Tonnes</h4>
              </Col>
              <Col>
                  <h4 className='certTexts'></h4>
                  <h4 className='certTexts'> Export Overseas</h4>
              </Col>
          </Row>
      
    </Container>
  )
}

export default Certifications
