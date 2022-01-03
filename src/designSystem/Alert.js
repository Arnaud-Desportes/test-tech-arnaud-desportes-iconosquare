import PropTypes from 'prop-types';
// ICON
import { RiErrorWarningFill } from 'react-icons/ri';

const Alert = ({ children, className, theme }) => {

  let backgroundColor, borderColor, textColor;
  switch (theme) {
    case 'danger':
      backgroundColor = 'bg-red-50'
      borderColor = 'border-red-400'
      textColor = 'text-red-700'
      break;
    case 'success':
      backgroundColor = 'bg-green-50'
      borderColor = 'border-green-400'
      textColor = 'text-green-700'
      break;
    default:
      backgroundColor = 'bg-blue-50'
      borderColor = 'border-blue-400'
      textColor = 'text-blue-700'
      break;
  }
  return (
    <div className={`${className ? className : ''} ${backgroundColor} border-l-4 ${borderColor} p-4`}>
      <div className={`${textColor} flex`}>
        <div className="flex-shrink-0">
          <RiErrorWarningFill className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

Alert.defaultProps = {
  children:'Message here',
  className:'',
  theme:'',
};

Alert.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
};

export default Alert;
