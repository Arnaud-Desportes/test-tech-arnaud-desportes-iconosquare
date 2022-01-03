import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types';

// DESIGN SYSTEM
import Loader from 'designSystem/Loader';
// ICON
import { RiChat3Fill } from 'react-icons/ri'

export default function ModalPost({state, setstate, data}) {

  const [comments, setcomments] = useState([]);
  const [ready, setready] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`)
    .then(response => response.json())
    .then(json => {
      setcomments(json)
      setready(true)
    })
  }, [data]);

  if(ready) {
    return (
      <Transition.Root show={state} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setstate}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block md:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-primary bg-opacity-50 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="relative inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle md:max-w-lg sm:w-full py-6 pl-6 pr-3"
                style={{maxHeight: 'calc(100vh - 80px)' }}
              >

                <div className="fixed bottom-0 left-0 bg-white w-full px-6 py-5">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:text-sm animate"
                    onClick={() => setstate(false)}
                  >
                    Close
                  </button>
                </div>

                <div className="overflow-auto pr-3 mb-52" style={{maxHeight: 'calc(100vh - 180px)' }}>
                  <div>
                    <Dialog.Title as="h3" className="text-lg leading-6 font-black text-gray-800 capitalize">
                      {data.title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {data.body}
                      </p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className="mt-5 mb-3 flex items-center">
                        <div className="bg-primary rounded-full p-1.5 mr-2 inline-block">
                          <RiChat3Fill className="w-4 h-4 text-white" />
                        </div>
                        Comments {comments && comments.length > 0 ? <span className="ml-1 text-xs">({comments.length})</span> : <span className="ml-1 text-xs">(0)</span>}
                      </div>
                      <span className='w-full h-0.5 bg-gray-200 ml-4 mt-1.5'></span>
                    </div>
                    {comments && comments.map(comment => (
                      <div className="py-5 border-b" key={comment.id}>
                        <div className="font-extrabold text-sm capitalize">{comment.name}</div>
                        <p className="text-xs py-2">{comment.body}</p>
                        <div className="text-right text-xs font-black">{comment.email}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    )
  }
  else {
    return (
      <div className='z-10 bg-primary bg-opacity-50 w-full h-screen fixed flex items-center justify-center py-20'>
        <Loader />
      </div>
    )
  }
}

ModalPost.propTypes = {
  data: PropTypes.object.isRequired,
  setstate: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};