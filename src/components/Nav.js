import React from 'react';
import Pdf from 'assets/documents/test_technique_reactjs.pdf';
import Main from 'designSystem/Main';
import Button from 'designSystem/Button';
import { RiDownloadCloud2Fill, RiGithubFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='bg-white py-5 border-b border-gray-200'>
      <Main>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to="/">
              <img src={require(`assets/svg/logo-app.svg`).default} alt="logo" className="w-7 h-7 md:w-10 md:h-10 mr-4 animate" />
            </Link>
            <div className='flex md:flex-col'>
              <div>
                <span className='font-extrabold text-md md:text-xl'>App technical test</span> 🦄
              </div>
              <span className='flex items-center'>
                <span className='hidden md:block font-extrabold text-xs text-primary'>
                  By <a href='https://arnaud-desportes.fr' target='_blank' rel='noreferrer' className='underline'>Arnaud Desportes</a>.
                </span>
                <span className='border border-gray-200 rounded-full py-0.5 px-2.5 mx-2 text-gray-500 font-extrabold text-xs'>1.0.0</span>
              </span>
            </div>
          </div>
          <div className='flex items-center'>
            <Button href='https://github.com/Arnaud-Desportes/test-tech-arnaud-desportes-iconosquare' className="mr-5">
              <RiGithubFill className='w-5 h-5 md:mr-2' />
              <span className='hidden md:block'>repository</span>
            </Button>
            <Button href={Pdf} theme='primary'>
              <RiDownloadCloud2Fill className='w-5 h-5 md:mr-2' />
              <span className='hidden md:block'>subject</span>
            </Button>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default Nav;
