import React, { useEffect, useState } from 'react';
// COMPONENT
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import Tables from 'components/Tables';
// DESIGN SYSTEM
import Input from 'designSystem/Input';
import Main from 'designSystem/Main';
// ICON
import { RiSearch2Line } from 'react-icons/ri';

function Index() {

  const [users, setusers] = useState([]);
  const [filteredResults, setfilteredResults] = useState([]);
  const [search, setsearch] = useState('');
  const [noResults, setnoResults] = useState(false);

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
        setTimeout(function () { setusers(json); setfilteredResults(json); }, 700)
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
      setfilteredResults(JSON.parse(localStorage.getItem(`users_list`) ));
    }
  }

  const handleChange = (e) => {
    setsearch(e.target.value)
    searchItems(e.target.value)
  }

  const searchItems = (search) => {
    if (search !== ''){
      const filteredUsers = users.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(search.toLowerCase());
      })
      if (filteredUsers.length > 0){
        setfilteredResults(filteredUsers)
      }
      else {
        setfilteredResults([])
        setnoResults(true)
      }
    }
    else {
      setfilteredResults(users)
    }
  }

  return (
    <>
      <Nav />
      <Main className='mt-10'>
        <Input
          state={search}
          handleChange={handleChange}
          placeholder='Search a user now...'
          icon={<RiSearch2Line className='w-4 h-4' />}
        />
        <p className="text-xs text-center text-gray-400 font-black mt-2 mb-5">
          You can find a user if you know at least one of these criteria: email, id, name, phone, username, website.
        </p>
        <Tables data={filteredResults} noResults={noResults} />
      </Main>
      <Footer />
    </>
  );
}

export default Index;
