import React from 'react';

const Main = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-7xl px-4 ${className ? className : ''}`}>
      {children}
    </div>
  );
}

export default Main;
