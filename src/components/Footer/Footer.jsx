import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg text-dark py-3 footer">
      <Container className="footerContainer">
        <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709594043/1828Cashew/Logo_c8tury.png" alt="1828 Cashew" className="footerLogo" />
        <Row className='footerRow'>
          <Col xs={12} md={4} className="mb-3 mb-md-0 footerFirst">
            <h4 className='footerFirstH4'>BBA VENTURES</h4>
            <h5>MAKER OF 1828 CASHEW</h5>
            <p>Arepo industrial estate, Beside BHN, Km3, Lagos/Shagamu express road, Arepo, Ogun State</p>
            <ul className="list-unstyled footerLists">
              <li>History</li>
              <li>Mission</li>
              <li>Vision</li>
            </ul>
          </Col>
          <Col xs={12} md={8} className="px-md-3">
            <Row className="footerSecondRow">
              <Col xs={6} md={8}>
                <Row>
                  <Col xs={12} md={4}>
                    <h5>HOME</h5>
                  </Col>
                  <Col xs={12} md={4}>
                    <h5>ABOUT</h5>
                  </Col>
                  <Col xs={12} md={4}>
                    <h5>CONTACT</h5>
                  </Col>
                </Row>
              </Col>
              <Col xs={6} md={4} className=""> 
                <h5>SERVICES</h5>
                <ul className="list-unstyled footerLists">
                  <li>Cashew nut processing</li>
                  <li>Cashew nut exportation</li>
                  <li>Cashew nut sourcing</li>
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
