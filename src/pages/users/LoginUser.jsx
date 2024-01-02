import LoginUserForm from '../../components/forms/LoginUserForm';
import ProgressBar from 'react-bootstrap/ProgressBar';


const LoginUser = () => {

    return (
        <div>
            <ProgressBar variant="success" animated now={100} />
            <LoginUserForm/>
        </div>
    )

}

export default LoginUser

