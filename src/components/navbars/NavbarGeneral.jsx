import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";

const NavbarGeneral = () => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);

  useEffect( () =>{
    const token = Cookies.get('token');
    const name = Cookies.get('name');

    // Actualizar el estado con el valor de la cookie
    setToken(token);
    setName(name);
  }, [])

  return (
    <Container>
      <Navbar
        className="shadow p-3 mb-3 mt-3 bg-white rounded"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="#home">Sufi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="justify-content-around">
            <Row>
              {token ? (
                <p
                className="d-flex align-items-center"
                style={{height: '100%'}}
                >Hola, {name}</p>
              ) : (
                <div className="d-flex align-items-center" style={{maxWidth: '50vh'}}>
                  <Col xs="auto">
                    <Button
                      id="btnEntrar"
                      variant="outline-success"
                      type="submit"
                    >
                      <Link
                        id="linkEntrar"
                        style={{
                          textDecoration: "none",
                        }}
                        to={`/entrar`}
                      >
                        Entrar
                      </Link>
                    </Button>
                  </Col>
                  <Col xs="auto">
                    <Button variant="success" type="submit">
                      <Link
                        id="linkRegister"
                        style={{ textDecoration: "none" }}
                        to={`/registro`}
                      >
                        Registrar
                      </Link>
                    </Button>
                  </Col>
                </div>
              )}
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarGeneral;
