import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// COMPONENT
import AddPost from 'components/AddPost';
import Footer from 'components/Footer';
import ModalPost from 'components/ModalPost';
import Nav from 'components/Nav';
// DESIGN SYSTEM
import Button from 'designSystem/Button';
import Loader from 'designSystem/Loader';
import Main from 'designSystem/Main';
// ICON
import { RiArrowLeftLine, RiArrowRightLine, RiFileAddFill, RiUser6Line } from 'react-icons/ri';
import Alert from 'designSystem/Alert';
import Banner from 'designSystem/Banner';

const Postslist = () => {
  let params = useParams();
  const [user, setuser] = useState({});
  const [listPosts, setlistPosts] = useState([]);
  const [dataPostToRead, setdataPostToRead] = useState({});
  const [openPost, setopenPost] = useState(false);
  const [addPost, setaddPost] = useState(false);
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

  listPosts.sort((a, b) => {
    let ta = a.title.toLowerCase(),
        tb = b.title.toLowerCase();

    if (ta < tb) {
        return -1;
    }
    if (ta > tb) {
        return 1;
    }
    return 0;
  });

  const handleAddPost = () => {
    setaddPost(true)
  }

  if (!error) {
    return (
      <>
        {openPost &&
          <ModalPost
            state={openPost}
            setstate={setopenPost}
            data={dataPostToRead}
          />}
        {addPost &&
          <AddPost
            state={addPost}
            setstate={setaddPost}
            uid={params.userId}
            listPosts={listPosts}
            setlistPosts={setlistPosts}
          />}
        <Nav />
        <Main className='mt-10'>
          <div className='flex items-center mb-5'>
            <Button link='/' theme='primary' className="mr-5">
              <RiArrowLeftLine className='w-4 h-4 md:mr-2' />
              <span className='hidden md:block'>Go back</span>
            </Button>
            <h1 className='text-xl md:text-2xl font-black capitalize'><span>{Object.keys(user).length > 0 ? `List posts for ${user.name}` : ''}</span></h1>
          </div>
          { Object.keys(user).length > 0 &&
            <Banner>
              <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='bg-white rounded-full text-primary inline-block p-2 mr-5 mb-4 md:mb-0'>
                  <RiUser6Line className='w-10 h-10' />
                </div>
                <div className='text-center md:text-left'>
                  <h2 className='text-md md:text-xl'>{user.name} allias {user.username}</h2>
                  <span className='font-black text-xs md:text-sm'>{user.company && `Company : ${user.company.name}`}</span>
                </div>
              </div>
            </Banner>
          }
          {listPosts.length > 0 && Object.keys(user).length > 0 ?
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>

              <button
                onClick={handleAddPost}
                className="group relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-primary hover:bg-primary hover:bg-opacity-5 animate"
              >
                <RiFileAddFill className='mx-auto h-12 w-12 text-gray-400 group-hover:text-primary animate' />
                <span className="mt-2 block text-sm font-medium text-gray-400 group-hover:text-primary animate">Add a new post</span>
              </button>

              {listPosts && listPosts.map((post, index) => (
                <Card key={index} post={post} setdataPostToRead={setdataPostToRead} setopenPost={setopenPost} />
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
            <span className='hidden md:block'>Go back</span>
          </Button>
        </div>
        <Alert>
          {error}
        </Alert>
      </Main>
      <Footer />
    </>
  )
}

export default Postslist;

const Card = (props) => {

  const {
    post,
    setdataPostToRead,
    setopenPost
  } = props;

  const readPost = (data) => {
    setdataPostToRead(data)
    setopenPost(true)
  }

  return (
    <button onClick={() => readPost(post)} className='group border border-gray-200 bg-white hover:bg-primary hover:bg-opacity-5 rounded-lg pl-4 pr-8 pt-8 flex flex-col justify-between animate'>
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
  )
}