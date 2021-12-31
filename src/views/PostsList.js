import React, { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import Nav from 'components/Nav';
import Main from 'designSystem/Main';
import Button from 'designSystem/Button';
import { RiArrowLeftLine, RiArrowRightLine, RiUser6Line } from 'react-icons/ri';
import Loader from 'designSystem/Loader';
import { useParams } from "react-router-dom";

const Postslist = () => {
  let params = useParams();
  const [user, setuser] = useState('');console.log('list all users', user)
  const [listPosts, setlistPosts] = useState([]);console.log('*liste posts by user' , listPosts)

  useEffect(() => {
    if (params.userId){
      let uid = params.userId
      console.log('///*/*//', uid)
      fetch(`https://jsonplaceholder.typicode.com/users/${uid}/posts`)
      .then(response => response.json())
      .then(json => setlistPosts(json))
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          const user = json.find(user => user.id === Number(uid))
          // sorry internet god but nice loader must be seen
          setTimeout(function () {
            setuser(user);
          }, 700)
        })
    }
  }, [params.userId]);

  return (
    <>
      <Nav />
      <Main className='mt-10'>
        <div className='flex items-center mb-5'>
          <Button link='/' theme='primary' className="mr-5">
            <RiArrowLeftLine className='w-4 h-4 md:mr-2' />
            <span className='hidden md:block'>Return</span>
          </Button>
          <h1 className='text-xl md:text-2xl font-black capitalize'><span>{Object.keys(user).length > 0 ? `List posts for ${user.name}` : ''}</span></h1>
        </div>
        {listPosts.length > 0 && Object.keys(user).length > 0 ?
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
            {listPosts && listPosts.map(post => (
              <button key={post.id} className='group border border-gray-200 bg-white hover:bg-primary hover:bg-opacity-5 rounded-lg pl-4 pr-8 pt-8 flex flex-col justify-between animate'>
                <div className='px-5 text-left'>
                  <h2 className='text-2xl font-black capitalize mb-5'>{post.title}</h2>
                  <p className='italic text-gray-500'>{post.body}</p>
                </div>
                <div className='inline-block'>
                  <button className='my-5 flex items-center text-primary group-hover:bg-primary rounded group-hover:text-white hover:shadow-lg py-3 px-5 animate'>
                    <span className='text-sm'>Read now</span>
                    <RiArrowRightLine className='w-4 h-4 ml-2' />
                  </button>
                </div>
              </button>
            ))}
          </div>
        :
          <div className='flex justify-center py-20'>
            <Loader />
          </div>
        }
      </Main>
      <Footer />
    </>
  );
}

export default Postslist;
