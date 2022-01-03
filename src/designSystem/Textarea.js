import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => {

  const {
    id,
    label,
    name,
    rows,
    className,
    placeholder,
    required,
    state,
    handleChange,
    loading
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
      <textarea
        id={id}
        name={name}
        rows={rows}
        onChange={(e) => handleChange(e)}
        value={state}
        className={`block w-full pr-10 pl-5 py-3 border border-gray-300 ${loading ? 'bg-gray-200 text-gray-400' : 'bg-white text-gray-800'} placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md animate`}
        placeholder={placeholder}
        required={required ? true : false}
        disabled={disabled ? true : false}
      />
    </div>
  );
};

Textarea.defaultProps = {
  className:'',
  id:'input-form',
  label:'',
  loading:false,
  name:'input',
  placeholder:'Your text here',
  required:false,
  rows: 5,
  type:'text',
};

Textarea.propTypes = {
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  state: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Textarea;
