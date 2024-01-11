import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";


const BadgesNav = ({ category, label_color }) => {
  return (
    <Container className="d-flex justify-content-center">
      <Stack gap={3} direction="horizontal" className="d-flex justify-content-center flex-wrap" style={{width: 'auto'}}>
      <Badge bg={label_color}><Link to={`/categorias/${category}`} style={{textDecoration: "none", color: "white"}}>{category}</Link></Badge>
      </Stack>
    </Container>
  );
};

export default BadgesNav;
