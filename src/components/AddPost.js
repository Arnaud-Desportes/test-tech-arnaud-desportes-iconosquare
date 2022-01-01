/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Input from 'designSystem/Input'
import Textarea from 'designSystem/Textarea'
import Loader from 'designSystem/Loader'
import Alert from 'designSystem/Alert'

export default function AddPost({ state, setstate, uid , listPosts, setlistPosts} ) {
  const cancelButtonRef = useRef(null)
  const data = {
    title: '',
    content: ''
  }
  const [stateData, setstateData] = useState(data); console.log("Global State => ", stateData)
  const handleChange = e => {
    setstateData({...stateData, [e.target.id]: e.target.value})
  }

  const [error, seterror] = useState('');
  const [successMessage, setsuccessMessage] = useState('');
  const [loading, setloading] = useState(false);

  const removeState = () => {
    setstateData({ title: '', content: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true)
    seterror('')
    setsuccessMessage('')
    if (uid && stateData.title && stateData.content) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: stateData.title,
          body: stateData.content,
          userId: uid,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          const newList = listPosts.concat(json)
          setlistPosts(newList)
          setsuccessMessage('Your post has been added successfully, close the window or add a new post.')
          removeState()
          setloading(false)
        })
        .catch((error) => {
          seterror('an error has occurred please try again')
          setloading(false)
      } );
    }
  }

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setstate}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <form onSubmit={handleSubmit}>
                <div className="mt-3 sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg text-center leading-6 font-medium text-gray-900">
                    Create new post
                  </Dialog.Title>
                  {stateData.title || successMessage ? null :
                    <Alert className="my-5">
                      Hello, god of the internet ✨, using a title starting with the letter 'A' allows you to see the new post more easily, because it is sorted in ascending alphabetical order.
                    </Alert>
                  }
                  <Input
                    label="Title"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Your title here"
                    required
                    className="mt-2 mb-5"
                    state={stateData.title}
                    handleChange={handleChange}
                    loading={loading}
                  />
                  <Textarea
                    label="Content"
                    placeholder="Your post here"
                    id="content"
                    name="content"
                    rows={5}
                    required
                    state={stateData.content}
                    handleChange={handleChange}
                    className="mt-2"
                    loading={loading}
                  />
                </div>

                {!error && !successMessage ? null :
                  <Alert className="my-5" theme={`${error ? 'danger' : 'success'}`}>
                    {error ? error : successMessage}
                  </Alert>
                }

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="submit"
                    disabled={loading ? true : false}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-secondary sm:col-start-2 sm:text-sm animate"
                  >
                    {!loading ? 'Create' : <Loader color="white" />}
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-red-500 hover:text-white hover:border-white sm:mt-0 sm:col-start-1 sm:text-sm animate"
                    onClick={() => setstate(false)}
                    ref={cancelButtonRef}
                  >
                    {!successMessage ? 'Cancel' : 'Go back'}
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
