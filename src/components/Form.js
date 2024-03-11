import { useContext, useState } from 'react';
// config
import config from '../config/general';
import SurveyContext from '../context/SurveyContext';

const Form = () => {
  const [mail, setMail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const { setShowSurvey } = useContext(SurveyContext);
  const { setMailContext } = useContext(SurveyContext);

  return (
    <>
      <div className='relative'>
        <div className='min-w-0 flex-1'>
          <label htmlFor='email' className='sr-only'>
            Email address
          </label>
          <input
            type='email'
            name='fields[email]'
            autoComplete='email'
            aria-invalid='false'
            id='email'
            placeholder='Ange din e-postadress'
            className='form-control block w-full rounded-sm bg-gray px-4 py-5 text-base text-black placeholder-gray-500 focus:outline-none'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className='mt-1 ml-2 sm:mt-3 sm:ml-3 flex-1 sm:flex-auto w-full sm:w-auto'>
          <button
            type='button'
            onClick={() => {
              setShowSurvey(1);
              setMailContext(mail);
            }}
            className='relative sm:absolute right-2 sm:top-2 w-full sm:w-auto block  rounded-sm bg-activeButton py-3 px-4 font-medium text-white shadow hover:bg-activeButton disabled:cursor-not-allowed'
            disabled={mail === '' || loading}
          >
            Gå med på väntelistan
          </button>
        </div>
      </div>
      <span className='text-sm px-2 italic text-red-500'>{message}</span>
    </>
  );
};

export default Form;
