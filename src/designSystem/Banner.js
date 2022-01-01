const Banner = ({ children }) => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary p-10 text-white mb-5'>
      {children}
    </div>
  );
}

export default Banner;
