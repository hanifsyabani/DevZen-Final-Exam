import { Link } from 'react-router-dom';
import imglogin from '../assets/imglogin.png';

export default function Login() {
  return (
    <main>
      <Link to={'/'} className="flex items-center gap-2 pl-2 pt-2">
        <img src="/logo.svg" alt="login" />
        <div>
          <h5 className="font-extrabold text-2xl text-primary">Dev</h5>
          <p className="text-secondary text-lg -mt-2 font-semibold">Zen</p>
        </div>
      </Link>
      <div className="flex flex-col-reverse lg:flex-row  justify-center items-center gap-20 lg:p-14 p-6 ">
        <div className="lg:w-1/2 -mt-14 lg:mt-0">
          <div className="bg-white shadow-2xl lg:p-10 p-4 w-full rounded-3xl ">
            <h1 className="text-3xl font-bold text-center text-primary">
              Log in
            </h1>
            <div className="mt-10">
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

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>

              <button className="w-1/2 mx-auto flex justify-center items-center font-bold  bg-primary text-white px-4 py-2 rounded-lg mt-10 hover:bg-blue-950">
                Log in
              </button>

              <p className="text-center mt-2">
                Belum punya akun?{' '}
                <Link to={'/register'} className="text-secondary">
                  Daftar
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] ">
          <img src={imglogin} alt="login" className="w-full" />
        </div>
      </div>
    </main>
  );
}
