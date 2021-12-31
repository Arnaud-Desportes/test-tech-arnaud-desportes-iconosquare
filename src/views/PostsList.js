import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// COMPONENT
import Footer from 'components/Footer';
import ModalPost from 'components/ModalPost';
import Nav from 'components/Nav';
// DESIGN SYSTEM
import Button from 'designSystem/Button';
import Loader from 'designSystem/Loader';
import Main from 'designSystem/Main';
// ICON
import { RiArrowLeftLine, RiArrowRightLine, RiErrorWarningLine } from 'react-icons/ri';

const Postslist = () => {
  let params = useParams();
  const [user, setuser] = useState({});
  const [listPosts, setlistPosts] = useState([]);
  const [dataPostToRead, setdataPostToRead] = useState({});
  const [openPost, setopenPost] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => {
    if (params.userId){
      let uid = params.userId
      fetch(`https://jsonplaceholder.typicode.com/users/${uid}/posts`)
      .then(response => response.json())
      .then(json => {
        if (json.length > 0){
          setlistPosts(json)
        }
        else {
          seterror('an error has occurred please try again')
        }
      })

      fetch(`https://jsonplaceholder.typicode.com/users/${uid}`)
        .then(response => response.json())
        .then(json => {
          // sorry internet god but nice loader must be seen
          setTimeout(function () {
            setuser(json);
          }, 700)
        })
    }
  }, [params.userId]);

  const readPost = (data) => {
    setdataPostToRead(data)
    setopenPost(true)
  }

  const addPost = () => {
    console.log('add post here')
  }

  if (!error) {
    return (
      <>
        {openPost && <ModalPost state={openPost} setstate={setopenPost} data={dataPostToRead} />}
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

              <button
                onClick={addPost}
                className="group relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-primary hover:bg-primary hover:bg-opacity-5 animate"
              >
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 group-hover:text-primary animate"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                  />
                </svg>
                <span className="mt-2 block text-sm font-medium text-gray-400 group-hover:text-primary animate">Add a new post</span>
              </button>

              {listPosts && listPosts.map(post => (
                <button onClick={() => readPost(post)} key={post.id} className='group border border-gray-200 bg-white hover:bg-primary hover:bg-opacity-5 rounded-lg pl-4 pr-8 pt-8 flex flex-col justify-between animate'>
                  <div className='px-5 text-left'>
                    <h2 className='text-xl md:text-2xl font-black capitalize mb-5'>{post.title}</h2>
                    <p className='italic text-gray-500'>
                      {post.body.substring(0, 150) + '...'}
                    </p>
                  </div>
                  <div className='inline-block'>
                    <span className='my-5 flex items-center text-primary group-hover:bg-primary rounded group-hover:text-white hover:shadow-lg py-3 px-5 animate'>
                      <span className='text-sm'>Read now</span>
                      <RiArrowRightLine className='w-4 h-4 ml-2' />
                    </span>
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
  return (
    <>
      <Nav />
      <Main className='mt-10'>
        <div className='flex mb-5'>
          <Button link='/' theme='primary' className="mr-5">
            <RiArrowLeftLine className='w-4 h-4 md:mr-2' />
            <span className='hidden md:block'>Return</span>
          </Button>
        </div>

        <div className='flex items-center justify-center bg-white p-6 text-red-500'>
          <RiErrorWarningLine className='w-4 h-4 mr-2' />
          {error}
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default Postslist;
