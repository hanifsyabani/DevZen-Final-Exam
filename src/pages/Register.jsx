import { Link, useNavigate } from 'react-router-dom';
import imglogin from '../assets/imglogin.png';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../service/Firebase';
import { useToast } from '@chakra-ui/react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toast = useToast();
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      const result = credentials.user
      
      if(result){
        toast({
          title: 'Success',
          description: 'Register Success',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })

        setEmail('')
        setPassword('')
        navigate('/login')
      }else{
        toast({
          title: 'Error',
          description: 'Register Failed',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        })
      }
    } catch (error) {
      setError(error.message)
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
      <motion.div
        className="lg:flex justify-center items-center gap-20 p-8"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="bg-white shadow-2xl lg:p-8 p-4 w-full rounded-3xl ">
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
                value={email}
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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

              <button className="w-1/2 mx-auto flex justify-center items-center font-bold  bg-primary text-white px-4 py-2 rounded-lg mt-10 hover:bg-blue-950" type='submit'>
                Register
              </button>
              {error && <p className="text-red-500 text-center mt-4">{error}</p>}
              <p className="text-center mt-2">
                Sudah punya akun?{' '}
                <Link to={'/login'} className="text-secondary font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[60%] mt-10 lg:mt-0 "
        >
          <img src={imglogin} alt="login" className="w-full" />
        </motion.div>
      </motion.div>
    </main>
  );
}
