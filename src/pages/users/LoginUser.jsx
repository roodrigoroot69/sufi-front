import LoginUserForm from '../../components/forms/LoginUserForm';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';


const LoginUser = () => {

    return (
        <div>
            <ProgressBar variant="success" animated now={100} />
            <div className='d-flex justify-content-center mt-3'><Image src="../../../img/icons/icon-128x128.png" roundedCircle /></div>
            <LoginUserForm/>
        </div>
    )

}

export default LoginUser

