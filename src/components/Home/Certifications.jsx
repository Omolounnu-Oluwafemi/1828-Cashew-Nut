import { Container, Row, Col } from 'react-bootstrap'
import './../../assets/styles/Certifications.css'
const Certifications = () => {
  return (
      <Container className='certContainer' fluid>
          <h4>OUR CERTIFICATIONS</h4>
          <Row>
              <Col>
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709741818/1828Cashew/Nafdac_nvfa4s.png" alt="" />
              </Col>
              <Col>
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709741815/1828Cashew/son_fo0goq.png" alt="" />
              </Col>
              <Col>
                  <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709741816/1828Cashew/Ncan_f9i3lm.png" alt="" />
              </Col>
          </Row>
      
    </Container>
  )
}

export default Certifications
