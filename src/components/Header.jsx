import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="bg-[#710014] shadow-md py-2 px-5 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold flex text-gray-800">
          <img src={Logo} alt="Logo" className='h-14' />
        </Link>

        <div className="relative flex-grow ml-8 max-w-lg">
          <input
            type="text"
            placeholder="Buscar..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const urlParams = new URLSearchParams(window.location.search);
                urlParams.set('text', e.target.value);

                window.location.href = `/search?${urlParams.toString()}`;
              }
            }}
            className="w-full pl-4 pr-10 py-2 border rounded-full text-sm focus:outline-none bg-white focus:border-gray-400"
          />
          <button onClick={(e) => {
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set('text', e.target.previousSibling.value);

            window.location.href = `/search?${urlParams.toString()}`;
          }} className="absolute right-3 top-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;