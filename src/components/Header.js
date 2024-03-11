import config from '../config/general';

const Header = () => {
  return (
    <header className='flex-col sm:flex-row flex justify-between items-start'>
      {/* <Image src={"/logo.svg"} width={180} height={60} alt={config.title} /> */}
      <h3 className='text-3xl font-bold text-black'>
        {config.contents.markOfTitle}
      </h3>
      <nav>
        <ul className='flex sm:mt-0 mt-4 items-center lg:gap-7 gap-3 font-medium text-base sm:text-lg'>
          <li className='text-black'>
            <a
              href={config.socials.twitter}
              className='px-5 py-2 rounded'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>
          </li>
          <li className='text-black'>
            <a
              href={config.socials.instagram}
              className='py-2 rounded'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
