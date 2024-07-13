import Navbar from '../components/Navbar/Navbar';
import { LuSchool } from 'react-icons/lu';
import { FaRegCalendarAlt } from 'react-icons/fa';
import pay from '../assets/pay.png';
import Footer from '../components/Footer/Footer';
import { PriceItem } from '../components/Price/PriceItem';
import { useEffect } from 'react';
import vol from '../assets/vol_faq.png';

export default function Price() {

  useEffect(() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
  return (
    <main className="relative">
      <Navbar />
      <div className="text-center bg-blue-900 text-white pt-32 pb-96 rounded-b-[10rem]">
        <h1 className="text-4xl font-bold">
          Harga <span className="text-secondary">Kami</span>
        </h1>
      </div>

      <img src={vol} alt="volcadot" className="absolute left-5 w-20 -z-10 " />
      <img src={vol} alt="volcadot" className="absolute right-5   w-20 -z-10" />

      <div className="lg:flex justify-center lg:space-x-8 lg:-mt-52 -mt-60 lg:pb-20  px-6 lg:px-0">
        {PriceItem.map((item) => (
          <div
            className={`lg:w-[22rem] w-full bg-white rounded-3xl shadow-2xl mb-32 lg:mb-0 pb-4`}
          >
            <div
              className={`bg-secondary text-center py-10 rounded-t-3xl relative ${item.id === 2 ? 'lg:-mt-10' : ''}`}
            >
              <div className="bg-white border border-secondary rounded-xl lg:w-[50%] px-4 py-1 absolute -top-10 left-1/2 transform -translate-x-1/2">
                <h1 className="text-secondary font-semibold text-lg">
                  {item.category}
                </h1>
              </div>
              <h1 className="text-white font-bold text-5xl">
                ${item.price} <small className="text-2xl">+tax</small>
              </h1>
              <p className="text-white">(Exclusive of GST &Taxes)</p>
            </div>
            <div className="flex justify-center items-center my-10">
              <div>
                <div className="flex items-center gap-4 text-[#5C5C5C] mb-8">
                  <LuSchool size={40} />
                  <p className="text-xl">1-1 Individuals</p>
                </div>
                <div className="flex items-center gap-4 text-[#5C5C5C]">
                  <FaRegCalendarAlt size={40} className="" />
                  <p className="text-xl">Memilih Waktu</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="w-44 border border-secondary px-2 py-3 text-center text-secondary rounded-xl font-semibold hover:bg-secondary hover:border-white hover:text-white ease-linear duration-300 ">
                Pilih Plan
              </button>
            </div>
            <img src={pay} alt="pay" className="mx-auto my-4" />
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
