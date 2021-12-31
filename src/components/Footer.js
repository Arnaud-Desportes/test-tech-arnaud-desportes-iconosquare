import React from 'react';
import Main from 'designSystem/Main';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Main>
      <Link to="/" className='flex items-center justify-center mt-10 hover:no-underline'>
        <img src={require(`assets/svg/logo-app.svg`).default} alt="logo" className="w-5 h-5 mr-4 animate" />
        <span className='text-xs text-gray-500 font-black'>© Arnaud Desportes . {(new Date()).getFullYear()} </span>
      </Link>
    </Main>
  );
}

export default Footer;
