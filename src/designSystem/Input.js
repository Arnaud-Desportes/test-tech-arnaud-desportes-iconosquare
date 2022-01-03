import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {

  const {
    autoComplete,
    className,
    handleChange,
    icon,
    id,
    label,
    loading,
    name,
    placeholder,
    required,
    state,
    type,
  } = props;

  const [disabled, setdisabled] = useState(false);
  useEffect(() => {
    if(loading) {
      setdisabled(true)
    }
    else {
      setdisabled(false)
    }
  }, [loading]);

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id}
          onChange={(e) => handleChange(e)}
          value={state}
          className={`block w-full pr-10 ${icon ? "pl-9" : "pl-5"} py-3 border border-gray-300 ${loading ? 'bg-gray-200 text-gray-400' : 'bg-white text-gray-800'}  placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md animate`}
          placeholder={placeholder}
          aria-invalid="true"
          required={required ? true : false}
          disabled={disabled ? true : false}
          autoComplete={autoComplete !== 'off' ? type : 'off'}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      </div>
    </div>
  );
};

Input.defaultProps = {
  autoComplete: 'off',
  className:'',
  icon:false,
  id:'input-form',
  label:'',
  loading:false,
  name:'input',
  placeholder:'Your text here',
  required:false,
  type:'text',
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element
  ]),
  id: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  state: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
