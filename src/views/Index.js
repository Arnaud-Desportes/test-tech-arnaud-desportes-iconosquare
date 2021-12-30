import React, {useEffect, useState} from 'react';
import Nav from 'components/Nav';
import Tables from 'designSystem/Tables';
import Main from 'designSystem/Main';
import Footer from 'components/Footer';

function Index() {

  const [users, setusers] = useState([]);console.log(users)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setusers(json))
  }, []);

  return (
    <>
      <Nav />
      <Main className='mt-10'>
        <Tables data={users} />
      </Main>
      <Footer />
    </>
  );
}

export default Index;
