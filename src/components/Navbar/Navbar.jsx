import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { NavItem } from './NavItem';
import { getAuth } from 'firebase/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setusers] = useState({
    name: '',
    email: '',
    photo: '',
    uid: '',
  });

  const navigate = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setusers({
        uid: user.uid,
      });
    } else {
      console.log('no user');
    }
  }, [user]);

  const handleSignout = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    <nav className="flex justify-center mt-4 font-sans">
      <div className="flex justify-between items-center px-[5%] py-2 fixed w-[90%] rounded-full bg-white/70 backdrop-blur-md shadow-lg z-10">
        <div className="flex gap-4 items-center">
          <img src={logo} alt="logo" />
          <div>
            <h5 className="font-extrabold text-2xl text-primary">Dev</h5>
            <p className="text-secondary text-lg -mt-2 font-semibold">Zen</p>
          </div>
        </div>
        {/* dekstop */}
        <ul className="hidden lg:flex items-center gap-10">
          {NavItem.map((item) => (
            <Link to={item.link} key={item.id}>
              <li className="font-semibold text-tertiary hover:text-secondary cursor-pointer text-sm">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        {users.uid ? (
          <button
            className="bg-white hidden lg:block text-secondary w-24 border border-secondary border-b-4 font-medium overflow-hidden relative px-4 py-2 text-sm rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            onClick={handleSignout}
          >
            <span className="bg-secondary shadow-primary absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Logout
          </button>
        ) : (
          <div className="hidden lg:flex gap-8 items-center">
            <Link to={'/login'}>
              <button className="bg-white text-secondary w-32 border border-secondary border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-secondary shadow-primary absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Login
              </button>
            </Link>
            <Link to={'/register'}>
              <button className="relative border hover:border-orange-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden py-2 w-32 rounded-md bg-orange-800 p-2 flex justify-center items-center font-bold">
                <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
                <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
                <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
                <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
                <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
                <p className="z-10">Get Started</p>
              </button>
            </Link>
          </div>
        )}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {/* mobile */}
      {isOpen && (
        <div
          className={`lg:hidden fixed top-20 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-10 `}
        >
          <ul className="flex flex-col items-center gap-6 py-4">
            {NavItem.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                onClick={() => setIsOpen(!isOpen)}
              >
                <li className="font-semibold text-tertiary hover:text-secondary cursor-pointer">
                  {item.title}
                </li>
              </Link>
            ))}
            {users.uid ? (
              <button
                className="bg-white text-secondary w-24 border border-secondary border-b-4 font-medium overflow-hidden relative px-4 py-2 text-sm rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                onClick={handleSignout}
              >
                <span className="bg-secondary shadow-primary absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Logout
              </button>
            ) : (
              <>
                <Link to={'/login'} >
                  <button className="bg-white text-secondary w-32 border border-secondary border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-secondary shadow-primary absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Login
                  </button>
                </Link>
                <Link to={'/register'} >
                  <button className="relative border hover:border-orange-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden py-2 w-32 rounded-md bg-orange-800 p-2 flex justify-center items-center font-bold">
                    <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
                    <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
                    <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
                    <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
                    <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
                    <p className="z-10">Get Started</p>
                  </button>
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
