import Container from "react-bootstrap/esm/Container";
import CategoriesNav from "../../components/navbars/CategoriesNav";
import NavbarGeneral from "../../components/navbars/NavbarGeneral";
import SearchForm from "../../components/forms/SearchForm";


const Index = () => {
  return (
    <div>
      <NavbarGeneral/>
      <Container>
        <CategoriesNav/>
        <SearchForm/>
      </Container>
    </div>
  );
};

export default Index;
