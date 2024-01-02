import Container from "react-bootstrap/esm/Container";
import BadgedNav from "./BadgesNav";

function CategoriesNav() {
  return (
    <Container>
    <div className="d-flex justify-content-center">
    <BadgedNav/>
    </div>
    </Container>
  );
}

export default CategoriesNav;