import React, {useEffect, useState} from 'react';
// COMPONENT
import Footer from 'components/Footer';
import Nav from 'components/Nav';
// DESIGN SYSTEM
import Main from 'designSystem/Main';
import Tables from 'designSystem/Tables';

function Index() {

  const [users, setusers] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('users_list'))) {
      if (localStorage.getItem('users_list_storageDate') ) {
        const date = localStorage.getItem('users_list_storageDate')
        checkLocalStorage(date)
      }
    }
    else {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        // sorry internet god but nice loader must be seen
        setTimeout(function () { setusers(json); }, 700)
        localStorage.setItem('users_list', JSON.stringify(json));
        localStorage.setItem('users_list_storageDate', Date.now());
      })
    }

  }, []);

  const checkLocalStorage = (date) => {
    const today = Date.now()
    const timeDifference = today - date

    const daysDifference = timeDifference / (1000 * 3600 * 24)
    if (daysDifference >= 2) {
      localStorage.removeItem('users_list')
      localStorage.removeItem('users_list_storageDate')
    }else {
      setusers(JSON.parse(localStorage.getItem(`users_list`) ));
    }
  }

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
