import { Link, useNavigate } from 'react-router-dom';
import imglogin from '../assets/imglogin.png';
import { motion } from 'framer-motion';
import { Spinner, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../service/Firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = credentials.user;
      if (user) {
        navigate('/home');
      } else {
        toast({
          title: 'Error',
          description: 'Login Failed',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="font-sans">
      <Link to={'/'} className="flex items-center gap-2 pl-2 pt-2">
        <img src="/logo.svg" alt="login" />
        <div>
          <h5 className="font-extrabold text-2xl text-primary">Dev</h5>
          <p className="text-secondary text-lg -mt-2 font-semibold">Zen</p>
        </div>
      </Link>
      <div className="flex flex-col-reverse lg:flex-row  justify-center items-center gap-20 lg:p-14 p-6 ">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -200, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 -mt-14 lg:mt-0"
        >
          <form
            onSubmit={handleLogin}
            className="bg-white shadow-2xl lg:p-10 p-4 w-full rounded-3xl "
          >
            <h1 className="text-3xl font-bold text-center text-primary">
              Log in
            </h1>
            <div className="mt-10">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 outline-none px-4 py-2 rounded-lg mb-4"
              />
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full border-b-2 border-gray-300 outline-none px-4 py-2 rounded-lg mb-4"
              />

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>

              <button
                className="w-1/2 mx-auto flex justify-center items-center font-bold  bg-primary text-white px-4 py-2 rounded-lg mt-10 hover:bg-blue-950"
                type="submit"
              >
                {loading ? <Spinner /> : 'Log in'}
              </button>

              {error && (
                <p className="text-red-500 text-center py-2">{error}</p>
              )}

              <p className="text-center mt-2">
                Belum punya akun?{' '}
                <Link to={'/register'} className="text-secondary">
                  Daftar
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[60%] "
        >
          <img src={imglogin} alt="login" className="w-full" />
        </motion.div>
      </div>
    </main>
  );
}
