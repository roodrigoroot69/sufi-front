import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";

const BadgesNav = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Stack gap={3} direction="horizontal" className="d-flex justify-content-center flex-wrap" style={{maxWidth: '100vw'}}>
        <Badge bg="primary">Comida</Badge>
        <Badge bg="secondary">Papeleria</Badge>
        <Badge bg="success">Farmcias</Badge>
        <Badge bg="danger">Ferreteria</Badge>
        <Badge bg="warning" text="dark">
          Telefonía
        </Badge>
        <Badge bg="info">Info</Badge>
        <Badge bg="light" text="dark">
          Autos
        </Badge>
        <Badge bg="dark">Motos</Badge>
        <Badge bg="primary">Comida</Badge>
        <Badge bg="secondary">Papeleria</Badge>
        <Badge bg="success">Farmcias</Badge>
        <Badge bg="danger">Ferreteria</Badge>
        <Badge bg="warning" text="dark">
          Telefonía
        </Badge>
        <Badge bg="info">Info</Badge>
        <Badge bg="light" text="dark">
          Autos
        </Badge>
        <Badge bg="dark">Motos</Badge>
      </Stack>
    </Container>
  );
};

export default BadgesNav;
