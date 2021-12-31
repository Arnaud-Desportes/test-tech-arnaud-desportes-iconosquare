import Button from 'designSystem/Button';
import { RiArrowRightCircleFill, RiExternalLinkLine, RiPhoneFill, RiUser6Line } from "react-icons/ri";
import Loader from 'designSystem/Loader';

export default function Tables({ data }) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ADDRESS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PHONE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    WEBSITE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    POSTS
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data && data.length > 0 ? data.map((user) => (
                  <tr key={user.id} className='group'>
                    <td className="px-6 py-4 whitespace-nowrap group-hover:bg-gray-100 animate">
                      <div className="flex items-center">
                        <RiUser6Line className='w-5 h-5 md:mr-2' />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-800">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap group-hover:bg-gray-100 animate">
                      <div className="text-sm text-gray-800">{user.address.street}</div>
                      <div className="text-sm text-gray-500 font-light">{user.address.city}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center group-hover:bg-gray-100 animate">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 items-center">
                        <RiPhoneFill className='w-3 h-3 mr-1' />
                        {user.phone}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-extrabold group-hover:bg-gray-100 animate">
                      <a href={`https://${user.website}`} target={'_blank'} rel='noreferrer' className="text-center">
                        <RiExternalLinkLine className='w-4 h-4 mx-auto' />
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium group-hover:bg-gray-100 animate">
                      <div className='flex items-center justify-end'>
                        <Button link={`user/${user.id}/posts`} >
                          <RiArrowRightCircleFill className='w-5 h-5' />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              :
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                    <Loader />
                  </td>
                </tr>
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}