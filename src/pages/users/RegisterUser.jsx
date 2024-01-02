import RegisterUserForm from '../../components/forms/RegisterUserForm';
import ProgressBar from 'react-bootstrap/ProgressBar';

const RegisterUser = () => {

    return (
        <div>
            <ProgressBar variant="success" animated now={50} />
            <RegisterUserForm/>
        </div>
    )

}

export default RegisterUser
