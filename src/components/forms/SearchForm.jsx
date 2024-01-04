import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const SearchForm = () => {
  return (
    <div className=" d-flex p-3 mb-3 mt-3">
      <Form className="d-flex w-100 justify-content-center">
            <Form.Control
              type="text"
              placeholder="Search"
              style={{marginRight: '.4em'}}
              className="mr-sm-2 w-50"
            />
            <Button variant="success" type="submit">
            Buscar</Button>
      </Form>
    </div>
  );
};

export default SearchForm;
