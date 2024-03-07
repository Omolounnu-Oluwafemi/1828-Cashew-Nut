import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../assets/styles/NavBar.css'

const NavBar = () => {
  const [show, setShow] = useState(false);
//   const [expand, setExpand] = useState('sm');

  const handleClose = () => setShow(false);
  const handleToggle = () => setShow((prevShow) => !prevShow);

  return (
    <div>
      <Navbar key='sm' expand='sm' className="bg-body-tertiary">
        <Container fluid className='navbar'>
          <Navbar.Brand href="#" className='logoContainer'>
            <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1709594043/1828Cashew/Logo_c8tury.png" alt=""  className='logo'/>  
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggle} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-between flex-grow-1 pe-5">
                <Nav.Link href="/" className='navlink'>Home</Nav.Link>
                <Nav.Link href="/products" className='navlink'>Product</Nav.Link>
                <Nav.Link href="/contact" className=' navlink'>Contact us</Nav.Link>
                <Nav.Link href="/about" className=' navlink'>About us</Nav.Link>
                <Nav.Link href="/gallery" className=' navlink'>Gallery</Nav.Link>
                <Nav.Link href="/register" className=' navlink'>Register</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar
