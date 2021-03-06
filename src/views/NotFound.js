import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Workflow</span>
            <img src={require(`assets/svg/logo-app.svg`).default} alt="logo" className="w-12 h-12" />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-700 tracking-tight sm:text-5xl">Page not found.</h1>
            <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-6">
              <Link to="/" className="text-base font-extrabold text-primary hover:text-secondary">
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <a href="#/" className="text-sm font-medium text-gray-500 hover:text-gray-600">
            Contact Support
          </a>
          <span className="inline-block border-l border-gray-300" aria-hidden="true" />
          <a href="#/" className="text-sm font-medium text-gray-500 hover:text-gray-600">
            Status
          </a>
          <span className="inline-block border-l border-gray-300" aria-hidden="true" />
          <a href="#/" className="text-sm font-medium text-gray-500 hover:text-gray-600">
            Twitter
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Notfound;
