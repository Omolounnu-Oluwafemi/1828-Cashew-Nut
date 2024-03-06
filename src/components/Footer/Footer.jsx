import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="bg text-dark py-3 footer">
      <Container className="footerContainer">
        <Row>
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et magna vel mauris consectetur.</p>
          </Col>
          <Col xs={12} md={8} className="px-md-3">
            <Row>
              <Col xs={12} md={4}>
                <h5>Services</h5>
                <ul>
                  <li>Service 1</li>
                  <li>Service 2</li>
                  <li>Service 3</li>
                </ul>
              </Col>
              <Col xs={12} md={4}>
                <h5>Contact</h5>
                <p>Address: 123 Main Street, Anytown, CA 12345</p>
                <p>Phone: (555) 555-5555</p>
                <p>Email: info@example.com</p>
              </Col>
              <Col xs={12} md={4}>
                <h5>Follow Us</h5>
                <ul className="list-unstyled">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
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
