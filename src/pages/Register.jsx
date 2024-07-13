import { Link } from 'react-router-dom';
import imglogin from '../assets/imglogin.png';

export default function Register() {
  return (
    <main>
      <Link to={'/'} className="flex items-center gap-2 pl-2 pt-2">
        <img src="/logo.svg" alt="login" />
        <div>
          <h5 className="font-extrabold text-2xl text-primary">Dev</h5>
          <p className="text-secondary text-lg -mt-2 font-semibold">Zen</p>
        </div>
      </Link>
      <div className="lg:flex justify-center items-center gap-20 p-8">
        <div className="lg:w-1/2">
          <div className="bg-white shadow-2xl lg:p-8 p-4 w-full rounded-3xl ">
            <h1 className="text-3xl font-bold text-center text-primary">
              Register
            </h1>
            <div className="mt-10">
              <input  
                type="text"
                name="name"
                id="name"
                placeholder="Fullname"
                className="w-full border-b-2 border-gray-300 outline-none px-4 py-2 rounded-lg mb-4"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 outline-none px-4 py-2 rounded-lg mb-4"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full border-b-2 border-gray-300 outline-none px-4 py-2 rounded-lg mb-4"
              />
              <input
                type="password"
                name="confpassword"
                id="confpassword"
                placeholder="Confirm Password"
                className="w-full border-b-2 border-gray-300 outline-none px-4 py-2 rounded-lg mb-4"
              />

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>

              <button className="w-1/2 mx-auto flex justify-center items-center font-bold  bg-primary text-white px-4 py-2 rounded-lg mt-10 hover:bg-blue-950">
                Register
              </button>

              <p className="text-center mt-2">
                Sudah punya akun?{' '}
                <Link to={'/login'} className="text-secondary font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] mt-10 lg:mt-0 ">
          <img src={imglogin} alt="login" className="w-full" />
        </div>
      </div>
    </main>
  );
}
