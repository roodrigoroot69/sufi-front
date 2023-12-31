import RegisterUserForm from '../../components/forms/RegisterUserForm';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';


const RegisterUser = () => {

    return (
        <div>
            <ProgressBar variant="success" animated now={50} />
            <div className='d-flex justify-content-center mt-3'><Image src="../../../img/icons/icon-128x128.png" roundedCircle /></div>
            <RegisterUserForm/>
        </div>
    )

}

export default RegisterUser
