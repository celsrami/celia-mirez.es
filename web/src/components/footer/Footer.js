import "../../styles/layout/Footer.scss";
import PropTypes from "prop-types";
const Footer = ({ prueba }) => {
  return (
    <footer className='footer'>
      <p>Footer{prueba}</p>
    </footer>
  );
};

Footer.propTypes = {
  prueba: PropTypes.string,
};
export default Footer;
