import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function NavbarGeneral() {
  return (
      <Container>
        <Navbar className='shadow p-3 mb-3 mt-3 bg-white   rounded'collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">Sufi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='justify-content-center'>
        <Row>
          <Col xs="auto">
          <Button variant='outline-success' type="submit">Entrar</Button>

          </Col>
          <Col xs="auto">
            <Button variant='success' type="submit">Registrar</Button>
          </Col>
        </Row>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}

export default NavbarGeneral;