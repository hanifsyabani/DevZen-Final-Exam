import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { NavItem } from './NavItem';

export default function Navbar() {
  return (
    <nav className="flex justify-center mt-4">
      <div className="flex justify-between items-center px-[5%] py-2 fixed w-[90%] rounded-full bg-white/70 backdrop-blur-md shadow-lg z-10">
        <div className="flex gap-4 items-center">
          <img src={logo} />
          <div>
            <h5 className="font-extrabold text-2xl text-primary">Dev</h5>
            <p className="text-secondary text-lg -mt-2 font-semibold">Zen</p>
          </div>
        </div>
        <ul className="flex items-center gap-10">
          {NavItem.map((item) => (
            <Link to={item.link} key={item.id}>
              <li className="font-semibold text-tertiary hover:text-secondary cursor-pointer">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-8 items-center">
          <Link to={'/login'}>
            <button className="bg-white text-secondary w-32  border border-secondary border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
              <span className="bg-secondary shadow-primary absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Login
            </button>
          </Link>
          <Link to={'/register'}>
            <button className="relative border hover:border-orange-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden py-2 w-32 rounded-md bg-orange-800 p-2 flex justify-center items-center font-bold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-orange-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">Get Started</p>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
