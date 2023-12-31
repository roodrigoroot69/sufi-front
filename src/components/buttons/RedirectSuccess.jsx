import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';


const RedirectSuccessButton = (props) => {

    return (
        <Link to={`/${props.redirectTo}`}>
         {props.redirectTo}
      </Link>
    )

}

RedirectSuccessButton.propTypes = {
    redirectTo: PropTypes.string.isRequired,
  };

export default RedirectSuccessButton;
