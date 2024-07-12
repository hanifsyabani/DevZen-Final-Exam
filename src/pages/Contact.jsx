import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import vol from '../assets/vol_faq.png';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { db } from '../service/Firebase';
import { addDoc, collection } from 'firebase/firestore';
import { contactItem } from '../components/Contact/contactItem';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  const [value, setValue] = useState({
    fname: '',
    phone: '',
    email: '',
    problem: '',
    msg: '',
  });

  const toast = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, 'contact'), {
        fname: value.fname,
        phone: value.phone,
        email: value.email,
        problem: value.problem,
        msg: value.msg,
      });

      if (docRef) {
        toast({
          title: 'Success',
          description: 'Kami menerima pesan Anda',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Terjadi kesalahan',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }

      setValue({
        fname: '',
        phone: '',
        email: '',
        problem: '',
        msg: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setLoading(false);
    }
  }



  return (
    <main className="relative">
      <Navbar />
      <div className="pb-72 pt-32  px-[5%] bg-secondary rounded-b-[10rem]">
        <h1 className="text-center text-4xl text-white font-bold">
          Hubungi Kami
        </h1>
      </div>
      <img src={vol} alt="vol" className="absolute left-5  w-20 -z-10" />
      <div className="w-[90%] mx-auto -mt-56">
        <div className=" bg-white p-20 rounded-xl shadow-xl ">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center gap-10">
              <div className="w-1/2">
                <FormControl isRequired className="mb-4">
                  <FormLabel>Nama Lengkap</FormLabel>
                  <Input
                    placeholder="First name"
                    name="fname"
                    id="fname"
                    onChange={(e) =>
                      setValue({ ...value, fname: e.target.value })
                    }
                    value={value.fname}
                    className=''
                  />
                </FormControl>
                <FormControl isRequired className="mb-4">
                  <FormLabel>No. Handphone</FormLabel>
                  <Input
                    placeholder="No Handphone"
                    name="phone"
                    id="phone"
                    onChange={(e) =>
                      setValue({ ...value, phone: e.target.value })
                    }
                    value={value.phone}
                  />
                </FormControl>
              </div>
              <div className="w-1/2">
                <FormControl isRequired className="mb-4">
                  <FormLabel>Contact Email</FormLabel>
                  <Input
                    placeholder="you@example.com"
                    name="email"
                    id="email"
                    onChange={(e) =>
                      setValue({ ...value, email: e.target.value })
                    }
                    value={value.email}
                  />
                </FormControl>
                <FormControl className="mb-4">
                  <FormLabel>Permasalahan</FormLabel>
                  <Select
                    placeholder="Mentor course"
                    name="problem"
                    id="problem"
                    onChange={(e) =>
                      setValue({ ...value, problem: e.target.value })
                    }
                    value={value.problem}
                  >
                    <option value="Mentor Course">Mentor Course</option>
                    <option value="Kegagalan Pembayaran">
                      Kegagalan Pembayaran
                    </option>
                    <option value="Other">Other</option>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <FormLabel>Pesan </FormLabel>
              <textarea
                name="msg"
                id="msg"
                className="w-full h-44 border border-gray-300 p-2"
                placeholder="Tuliskan pesan anda disini..."
                onChange={(e) => setValue({ ...value, msg: e.target.value })}
                value={value.msg}
                required
              />
            </div>
            <p className="text-sm text-slate-600 my-8">
              Dengan mengirimkan formulir ini, Anda menyetujui syarat dan
              ketentuan kami serta Kebijakan Privasi kami yang menjelaskan
              bagaimana kami dapat mengumpulkan, menggunakan, dan mengungkapkan
              informasi pribadi Anda, termasuk kepada pihak ketiga.
            </p>

            <button
              type="submit"
              className="bg-primary w-32 hover:bg-blue-950 py-2 rounded-lg text-white"
            >
              {loading ? <Spinner color="white" /> : 'Kirim'}
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center gap-20 my-32 ">
        {contactItem.map((item, i) => (
          <div className="w-[30rem] p-4 shadow-sm text-center cursor-pointer group" key={i}>
            <img src={item.img} alt="email" className="w-20 mx-auto group-hover:scale-110 transition-all" />
            <h1 className='font-semibold my-6'>{item.desc}</h1>
            <p className='text-primary font-semibold'>{item.link}</p>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
