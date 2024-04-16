import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../assets/styles/NavBar.css'

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleToggle = () => setShow((prevShow) => !prevShow);

  return (
    <div>
      <Navbar key='sm' expand='sm' className="bg-body-tertiary navbar-main">
        <Container fluid className='navbar'>
          <Navbar.Brand href="#" className='logoContainer'>
            <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1713262975/1828Cashew/Rectangle_155_iuyq65.png" alt=""  className='logo'/>  
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleToggle}
            className='handleToggle'
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
             <img src="https://res.cloudinary.com/drlfylzhf/image/upload/v1713262975/1828Cashew/Rectangle_155_iuyq65.png" alt=""  className='logoToggle'/> 
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 ">
                <Nav.Link href="/" className='navlink'>Home</Nav.Link>
                <Nav.Link href="/products" className='navlink'>Product</Nav.Link>

                <Dropdown className='navlink toggleCont' >  
                  <Dropdown.Toggle variant="" id="dropdown-basic" className='togleText'>
                    Services  
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='dropCont'>
                    <Dropdown.Item href="/processing" className='dropItem'>Processing</Dropdown.Item>
                    <Dropdown.Item href="/exportation" className='dropItem'>Exportation</Dropdown.Item>
                    <Dropdown.Item href="/sourcing" className='dropItem'>Sourcing</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="/contact" className='navlink'>Contact</Nav.Link>
                <Nav.Link href="/about" className='navlink'>About</Nav.Link>
                <Nav.Link href="/gallery" className='navlink'>Gallery</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar
