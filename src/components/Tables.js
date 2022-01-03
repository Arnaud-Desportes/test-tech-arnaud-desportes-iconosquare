import PropTypes from 'prop-types';

// DESIGN SYSTEM
import Button from 'designSystem/Button';
import Loader from 'designSystem/Loader';
// ICON
import {
  RiArrowRightCircleFill,
  RiExternalLinkLine,
  RiPhoneFill,
  RiUser6Line
} from "react-icons/ri";

const Tables = ({ data, noResults }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <Th textAlign="text-left">Name</Th>
                  <Th textAlign="text-left">ADDRESS</Th>
                  <Th textAlign="text-center">PHONE</Th>
                  <Th textAlign="text-center">WEBSITE</Th>
                  <Th textAlign="text-right">POSTS</Th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data && data.length > 0 ? data.map((user) => (
                  <tr key={user.id} className='group'>
                    <Td textAlign="text-left">
                      <div className="flex items-center">
                        <RiUser6Line className='w-5 h-5 md:mr-2' />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-800">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </Td>
                    <Td textAlign="text-left">
                      <div className="text-sm text-gray-800">{user.address.street}</div>
                      <div className="text-sm text-gray-500 font-light">{user.address.city}</div>
                    </Td>
                    <Td textAlign="text-center">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 items-center">
                        <RiPhoneFill className='w-3 h-3 mr-1' />
                        {user.phone}
                      </span>
                    </Td>
                    <Td textAlign="text-left">
                      <a href={`https://${user.website}`} target={'_blank'} rel='noreferrer' className="text-center text-sm">
                        <RiExternalLinkLine className='w-4 h-4 mx-auto' />
                      </a>
                    </Td>
                    <Td textAlign="text-left">
                      <div className='flex items-center justify-end text-sm'>
                        <Button link={`user/${user.id}/posts`} >
                          <RiArrowRightCircleFill className='w-5 h-5' />
                        </Button>
                      </div>
                    </Td>
                  </tr>
                ))
              :
                !noResults ?
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center whitespace-nowrap">
                      <Loader />
                    </td>
                  </tr>
                :
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-gray-400 font-black text-center whitespace-nowrap text-sm">
                      <div className='flex items-center justify-center'>
                        <RiUser6Line className='w-4 h-4 mr-2' />
                        <span>No user found</span>
                      </div>
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
};

Tables.propTypes = {
  data: PropTypes.array.isRequired,
  noResults: PropTypes.bool.isRequired,
};

export default Tables;

const Th = ({children, textAlign}) => {
  return (
    <th
      scope="col"
      className={`${textAlign} px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider`}
    >
      {children}
    </th>
  );
}

Th.defaultProps = {
  textAlign:"text-align-left",
};
Th.propTypes = {
  children: PropTypes.string.isRequired,
  textAlign: PropTypes.string,
};

const Td = ({children, textAlign}) => {
  return (
    <td className={`${textAlign} px-6 py-4 whitespace-nowrap group-hover:bg-gray-100 animate`}>
      {children}
    </td>
  );
}

Td.defaultProps = {
  textAlign:"text-align-left",
};
Td.propTypes = {
  children: PropTypes.any.isRequired,
  textAlign: PropTypes.string,
};

