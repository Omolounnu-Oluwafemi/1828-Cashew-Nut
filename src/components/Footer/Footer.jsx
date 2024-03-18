import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../../assets/styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg text-dark py-3 footer">
      <Container className="footerContainer">
        <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709594043/1828Cashew/Logo_c8tury.png" alt="1828 Cashew" className="footerLogo" />
        <Row className='footerRow'>
          <Col xs={12} md={3} className="mb-3 mb-md-0 footerFirst">
            <p>Arepo industrial estate, Beside BHN, Km3, Lagos/Shagamu express road, Arepo, Ogun State</p>
          </Col>
          <Col xs={12} md={9} className="px-md-3">
            <Row className="footerSecondRow">
                  <Col xs={6} md={3}>
                    <h5>HOME</h5>
                <ul className="list-unstyled footerLists">
                    <a href='/products' className='no-deco'><li>Products</li></a>
                    <a href='/gallery' className='no-deco'><li>Gallery</li></a>
                    <a href='/' className='no-deco'><li>Payment</li></a>
                    <a href='/' className='no-deco'><li>Certifications</li></a>
                    </ul>
                  </Col>
                  <Col xs={6} md={3}>
                    <h5>ABOUT</h5>
                <ul className="list-unstyled footerLists">
                    <a href='/about' className='no-deco'><li>History</li></a>
                    <a href='/about' className='no-deco'><li>Mission</li></a>
                    <a href='/about' className='no-deco'><li>Vision</li></a>
                    </ul>
                  </Col>
                    <Col xs={6} md={3}>
                      <h5>CONTACT</h5>
                      <ul className="list-unstyled footerLists">
                        <li>
                          <a href="">
                            <FontAwesomeIcon icon={faInstagram} size="lg" color='red' className='footer-icons'/>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <FontAwesomeIcon icon={faFacebook} size="lg" className='footer-icons'/>
                          </a>
                        </li>
                      </ul>
                    </Col>
                <Col xs={6} md={3} className=""> 
                  <h5>SERVICES</h5>
                  <ul className="list-unstyled footerLists">
                    <a href='/processing' className='no-deco'><li>Processing</li></a>
                    <a href='/exportation' className='no-deco'><li>Exportation</li></a>
                    <a href='/sourcing' className='no-deco'><li>Sourcing</li></a>
                  </ul>
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};


export default Footer;
