import PropTypes from 'prop-types';

const Banner = ({ children }) => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary p-10 text-white mb-5'>
      {children}
    </div>
  );
}

Banner.defaultProps = {
  children:'Message here',
};

Banner.propTypes = {
  children: PropTypes.element,
};

export default Banner;
