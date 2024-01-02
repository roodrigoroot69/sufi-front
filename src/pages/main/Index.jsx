import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import CategoriesNav from "../../components/navbars/CategoriesNav";
import NavbarGeneral from "../../components/navbars/NavbarGeneral";

const Index = () => {
  return (
    <div>
      <NavbarGeneral/>
      <Container>
        <CategoriesNav/>
      </Container>
    </div>
  );
};

export default Index;
