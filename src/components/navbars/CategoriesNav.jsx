import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import BadgedNav from "./BadgesNav";
import axios from 'axios';


const CategoriesNav = () => {

  const [categories, setCategories] = useState([]);

  useEffect( ()=>{
    const fetchData = async () => {
      axios.defaults.withCredentials = true;
      try{
        const apiUrl = import.meta.env.VITE_BACKEND_URL;
        let response = await axios.get(`${apiUrl}/categories`)
        setCategories(response.data)
      }catch (error){
        console.log(error)
    }
  }
  fetchData();
}, [] )

  return (
    <Container>
    <div className="d-flex justify-content-center">
    {categories.map((category) => (
      <BadgedNav key={category.id} category={category.name} label_color={category.label_color} />
      ))}
    </div>
    </Container>
  );
}

export default CategoriesNav;