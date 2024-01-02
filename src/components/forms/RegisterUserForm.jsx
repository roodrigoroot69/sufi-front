import { useForm } from 'react-hook-form';

import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RegisterAccountText from '../../components/texts/register/RegisterAccountText';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import RedirectSuccessButton from '../buttons/RedirectSuccess';
import axios from 'axios';


const RegisterUserForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    axios.defaults.withCredentials = true;

    try{
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      await axios.post(`${apiUrl}/users`, data)
      toast.info("¡Excelente! Vamos por buen camino", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar'
      });
      setTimeout(() => {
        window.location.href = '/entrar'
      }, 3000);
    }catch (error){
      toast.error(error.response.data.detail, {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar'
      });
    }
  };


  return (
      <Container className='bg-white rounded mt-5' style={{ minHeight: "50vh", padding: "1rem", maxWidth: "58vw" }}>
        <div className='d-flex justify-content-center mt-3'><Image src="../../../img/icons/icon-128x128.png" roundedCircle /></div>
        <ToastContainer autoClose={2000}  />
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={6}>
          <RegisterAccountText/>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formRegister">
                <Form.Label className='font-weight-bold'>Nombre</Form.Label>
                <Form.Control
                autoComplete="off"
                name='name' type="text" placeholder="Ingresa tu nombre" {...register("name", {
                  required: true,
                  minLength: 4
                })}/>
                {errors.name && errors.phone.type === "required" && (
                  <Form.Text className="errorMsg text-danger">El nombre es requerido.<br /></Form.Text>
                )}
                {errors.name && errors.name.type === "minLength" && (
                  <Form.Text className="errorMsg text-danger">El nombre debe ser mayor de 4 números</Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className='font-weight-bold'>Número de celular</Form.Label>
                <Form.Control
                autoComplete="off"
                  type="text"
                  name='phone'
                  placeholder="Ingresa tu número de celular"
                  {...register("phone", {
                    required: true,
                    minLength: 10,
                    maxLength: 10
                  })}
                />
                {errors.phone && errors.phone.type === "required" && (
                  <Form.Text className="errorMsg text-danger">El número es requerido. <br /></Form.Text>
                )}
                {errors.phone && errors.phone.type === "minLength" && (
                  <Form.Text  className="errorMsg text-danger">El número de celular deben ser 10 números. <br /></Form.Text>
                )}
                {errors.phone && errors.phone.type === "maxLength" && (
                  <Form.Text className="errorMsg text-danger">El número de celular deben ser 10 números.</Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className='font-weight-bold'>Password</Form.Label>
                <Form.Control
                autoComplete="off"
                name='password' type="password" placeholder="Ingresa tu contraseña" {...register("password", {
                  required: true,
                  minLength: 6
                })}  />
                {errors.password && errors.password.type === "required" && (
                  <Form.Text className="errorMsg text-danger">La contraseña es requerida. <br /></Form.Text>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <Form.Text className="errorMsg text-danger">La contraseña debe ser mayor de 6 caracteres</Form.Text>
                )}
              </Form.Group>
              <div className=" d-flex justify-content-center align-items-center flex-column">
                <Button variant="success" type="submit">
                  Registrar
                </Button>
                <p className='small'>Si ya tienes cuenta da click aquí <RedirectSuccessButton redirectTo='Entrar' /></p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
  );
}

export default RegisterUserForm;
