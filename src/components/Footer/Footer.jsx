import logo from '../../assets/logo.svg';
import { quicklinks } from './Itemfooter';
import { SiGooglemaps } from "react-icons/si";
import { FaPhone, FaTwitter, FaInstagram, FaLinkedin,FaYoutube, FaFacebook  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
  return (
    <footer className="mt-20 bg-primary px-[5%] py-10">
      <div className="flex justify-between ">
        <div className="">
          <div className="flex items-center gap-3 ">
            <img src={logo} alt="logo" />
            <h1 className="text-2xl font-bold text-white">
              Dev <span className="text-secondary">Zen</span>
            </h1>
          </div>
          <p className="text-white max-w-lg mt-4 text-sm">
            Mari kita bangun karir Anda bersama Jadilah orang pertama yang
            mengubah diri Anda dengan pelatihan tingkat korporat kami yang unik
            dan berkelas dunia.
          </p>
          <div>
            <h1 className="text-xl text-white font-bold my-6">
              Subscribe Our Newsletter
            </h1>
            <div className="flex items-center">
              <input
                type="text"
                className="bg-white p-3 rounded-tl-lg rounded-bl-lg w-52 text-primary placeholder:text-primary"
                placeholder="Enter your email..."
              />
              <button className="w-10 p-2 bg-secondary text-white text-2xl rounded-tr-lg rounded-br-lg">
                {'>'}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl text-white font-bold">
            Quick <span className="text-secondary">Links</span>
          </h1>
          <ul className="mt-4 text-white">
            {quicklinks.map((link) => (
              <li className="mb-3 hover:text-secondary cursor-pointer" key={link.id}>{link.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-xl text-white font-bold">
            Kontak <span className="text-secondary">Kami</span>
          </h1>
          <div className='mt-4 text-white'>
            <div className='flex gap-3 mb-4'>
              <SiGooglemaps size={20} />
              <p>Jl. Cempaka No. 1, Jakarta, Indonesia</p>
            </div>
            <div className='flex gap-3 mb-4'>
              <MdEmail size={20} />
              <p>devzenhr@gmail.com</p>
            </div>
            <div className='flex gap-3 mb-4'>
              <FaPhone size={20} />
              <p>+62 812 3456 789</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center mt-16'>
        <div className='flex items-center gap-12'>
          <p className='text-white hover:text-secondary cursor-pointer'>Terms & Condition</p>
          <p className='text-white hover:text-secondary cursor-pointer'>Privacy Policy</p>
        </div>
        <div className='flex items-center gap-5 text-white'>
          <FaFacebook size={20} className='cursor-pointer hover:text-secondary' />
          <FaTwitter size={20} className='cursor-pointer hover:text-secondary' />
          <FaInstagram size={20} className='cursor-pointer hover:text-secondary' />
          <FaLinkedin size={20} className='cursor-pointer hover:text-secondary' />
          <FaYoutube size={20} className='cursor-pointer hover:text-secondary' />
        </div>
      </div>
    </footer>
  );
}
