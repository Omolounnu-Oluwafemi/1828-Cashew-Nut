import { Container, Row, Col } from "react-bootstrap"
import './../../assets/styles/About.css'
const AboutUs = () => {
  return (
      <>
          <Container fluid className="aboutContainer">
              <div>
                  <h3 className="about-title">About Us</h3>
                  <hr/>
              </div>
              <Row className="about-text-pix">
                                
                  <Col className="about-p-col">
                    <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1714153344/1828Cashew/PHOTO-2024-02-26-14-33-30_3_dmw3mg.png" alt="1828 CASHEW NUT ADMIN STAFF" className="about-p-col-img"/>
                        <div>
                            <h6 className="about-p">
                              &quot;Welcome to 1828 CASHEW, a leading cashew processing company dedicated to delivering high-quality cashew products to our customers worldwide. Our story began with a passion for nuts and a commitment to excellence. We believe in harnessing the rich flavour and nutritional benefits of cashews to create products that delight our customers.
                              </h6>
                              <h6 className="about-p">
                                  Our state-of-the-art facility, combined with our experienced team, enables us to process cashews with precision and care. We take pride in our rigorous quality control measures, ensuring every product meets the highest standards of taste, texture, and safety. 
                              </h6>

                              <h6 className="about-p">
                                  At 1828 CASHEW, we&apos;re driven by a vision to be the preferred choice for cashew lovers globally. We strive to build long-lasting relationships with our customers, suppliers, and partners, founded on trust, reliability, and a shared passion for quality.
                              </h6>
                             
                              <h6 className="about-p">
                              Join us on our journey to bring the best of cashews to your table!&quot;
                            </h6>
                        </div>
                  </Col>
                 
              </Row>
          </Container>
    </>
  )
}

export default AboutUs
