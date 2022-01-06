// DESIGN SYSTEM
import Button from 'designSystem/Button';
// ICON
import { RiDownloadCloud2Fill } from 'react-icons/ri';
// ASSETS
import Pdf from 'assets/documents/test_technique_reactjs.pdf';

const Readme = () => {

  const classParagraph = 'max-w-xl mt-5 mx-auto text-sm text-gray-500'
  return (
    <div className="bg-white mb-10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">ReadMe</h2>
          <p className="mt-1 text-xl font-extrabold text-gray-800 sm:text-2xl sm:tracking-tight lg:text-4xl">
            Why this test and for whom?
          </p>
          <p className={classParagraph}>
            The purpose of this technical test is to validate a minimum level of knowledge in ReactJS.
          </p>
          <p className={classParagraph}>
            Anyone who needs my services as a React front-end developer can analyze my code and deduce my level in this exercise at the time it was coded.
          </p>
          <p className={classParagraph}>
            All developers who want to practice themselves or simply analyze the code of another developer to learn things.
          </p>
          <div className='flex items-center justify-center mt-5'>
            <Button href={Pdf} theme='primary'>
              <RiDownloadCloud2Fill className='w-5 h-5 md:mr-2' />
              <span className='hidden md:block'>Read the topic</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Readme;
