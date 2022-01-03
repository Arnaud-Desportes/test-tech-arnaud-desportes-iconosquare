import PropTypes from 'prop-types';

const Main = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-7xl px-4 ${className}`}>
      {children}
    </div>
  );
}

Main.defaultProps = {
  className:"",
};

Main.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Main;
