import Logo from '../../assets/header-svg/logo.svg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navigation() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-secondary mb-3 mt-4 pt-3 pb-3 rounded-5 border border-secondary">
          <Container fluid>
            <Navbar.Brand className='ms-3' href="#"> <img className='me-1' src={Logo} alt="" /> ClearLink</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  ClearLink
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <NavDropdown
                    className='me-4'
                    title="Products"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  ></NavDropdown>
                  <NavDropdown
                    className='me-4'
                    title="Solutions"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  ></NavDropdown>
                  <NavDropdown
                    className='me-4'
                    title="Resources"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  ></NavDropdown>
                  <Nav.Link
                    className='me-4' href="#action1">Pricing</Nav.Link>
                </Nav>
                <Nav className='justify-content-end flex-grow pe-2'>
                    <Button className='me-2 rounded-5 border border-secondary bg-white' variant="white">Talk to sales</Button>
                    <Button className='me-2 rounded-5' variant="primary">Sign up for free</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}