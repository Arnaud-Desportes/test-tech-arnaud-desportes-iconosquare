import React, { useEffect, useState } from 'react';

const Input = (props) => {
  const {
    label,
    type,
    name,
    id,
    placeholder,
    required,
    className,
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
    <div className={className ? className : ''}>
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
          className={`block w-full pr-10 pl-5 py-3 border border-gray-300 ${loading ? 'bg-gray-200 text-gray-400' : 'bg-white text-gray-800'}  placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md animate`}
          placeholder={placeholder}
          aria-invalid="true"
          required={required ? true : false}
          disabled={disabled ? true : false}
        />
      </div>
    </div>
  );
}

export default Input;
