import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SearchForm = () => {
  return (
    <div className=" d-flex p-3 mb-3 mt-5">
      <Form inline className="d-flex w-100 justify-content-center">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2 w-50"
            />
            <Button variant="success" type="submit">
            <FontAwesomeIcon icon="fa-brands fa-searchengin"/>
            Buscar</Button>
      </Form>
    </div>
  );
};

export default SearchForm;
