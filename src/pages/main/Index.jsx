import Container from "react-bootstrap/esm/Container";
import CategoriesNav from "../../components/navbars/CategoriesNav";
import NavbarGeneral from "../../components/navbars/NavbarGeneral";
import SearchForm from "../../components/forms/SearchForm";
import Cards from "../../components/cards/CardContainer";

const Index = () => {
  return (
    <div>
      <NavbarGeneral/>
      <Container fluid>
        <CategoriesNav/>
        <SearchForm/>
        <Cards/>
      </Container>
    </div>
  );
};

export default Index;
