import { Container, Row, Col } from "react-bootstrap"
import './../../assets/styles/About.css'
const AboutUs = () => {
  return (
      <>
          <Container className="aboutContainer">
              <div>
                  <h3>About Us</h3>
                  <hr/>
              </div>
              <Row>
                  <Col>
                      <p>
                          The company started its operation 25 years ago in Ondo state. It has since then expor cashew nuts to over 40 countries in Africa and Europe. <br /> We are known for taking our customers our priorities and providing our customers with the best of our products.
                      </p>
                  </Col>
                  <Col>
                      <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709902274/1828Cashew/GalleryPage/PHOTO-2024-02-26-14-33-30_1_gby3mm.png" alt="1828 CASHEW NUT ADMIN STAFF" />
                  </Col>
              </Row>
          </Container>
    </>
  )
}

export default AboutUs
