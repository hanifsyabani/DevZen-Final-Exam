import Navbar from "./components/Navbar/Navbar"
import heroimg from './assets/heroimg.png'
import { skillHighlight } from './components/HomePage/Hero/skillHighlight';
import { AiFeatures } from './components/HomePage/Ai/AiFeatures';
import volcadot from './assets/volcadot.png';
import skillimg from './assets/skillimg.png';
import {  FaUsers } from 'react-icons/fa6';
import achievimg from './assets/achiev.png';
import mentorsimg from './assets/mentor.jpg';
import star from './assets/star.png';
import { IoMdPaper } from 'react-icons/io';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { SkillFeatured } from './components/HomePage/WhoCanJoin/SkillFeatured';
import { Link } from 'react-router-dom';
import Header from './components/Header/Header';
import CardAchievment from './components/HomePage/Achievment/CardAchievment';
import { DataMentor } from './components/HomePage/Mentors/DataMentors';
import Footer from "./components/Footer/Footer";
import CardCourse from "./components/HomePage/Course/CardCourse";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "./service/Firebase";

function App() {

  const [course, setcourse] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const courseCollection = collection(db, 'course');
      const courseQuery = query(courseCollection, limit(8));
      try {
        const courseSnapshot = await getDocs(courseQuery);

        const courseList = courseSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setcourse(courseList);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="px-[3%] py-20 flex font-sans">
        <div className="w-1/2 pt-16">
          <h1 className="text-6xl  font-bold text-primary max-w-xl">
            Transformasi Diri untuk Masa Depan Gemilang
          </h1>
          <p className="pt-6 text-lg text-tertiary max-w-md">
            Dapatkan skill yang anda butuhkan untuk mencapai masa depan
          </p>

          <div className="flex items-center flex-wrap gap-4 mt-14">
            {skillHighlight.map((item) => (
              <div
                key={item.id}
                className="bg-[#F2F4F8] hover:bg-secondary ease-linear duration-300 py-2 px-4 rounded-lg w-46 group text-center cursor-pointer"
              >
                <h1 className="group-hover:text-white text-[#B9B5B2] font-semibold">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <img src={heroimg} />
        </div>
      </section>

      <section className="my-20 w-full px-[3%]  relative">
        <div className="flex items-center justify-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-primary tracking-wide leading-[3.2rem]">
              Platform Pembelajaran Online{' '}
              <span className="text-secondary">Berbasis AI di Indonesia</span>
            </h1>
          </div>

          <div className="w-1/2">
            <Swiper
              slidesPerView={'auto'}
              className="mySwiper"
              spaceBetween={30}
              modules={[Autoplay]}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
            >
              <div className="flex items-center justify-center">
                {AiFeatures.map((item) => (
                  <SwiperSlide>
                    <div
                      className="bg-[#FFF2EA] rounded-lg flex items-center justify-between text-left h-52 p-4 gap-2 cursor-pointer border border-secondary"
                      key={item.id}
                    >
                      <div className="w-[50%]">
                        <h1 className="text-2xl">Ai Based</h1>
                        <h1 className="text-2xl font-bold text-secondary">
                          {item.title}
                        </h1>
                      </div>
                      <div className="w-1/2">
                        <img
                          src={item.img}
                          alt="imgai"
                          className="w-full object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>

        <img
          src={volcadot}
          alt="volcadot"
          className="w-44 mt-3 absolute -left-1"
        />
      </section>

      <section className="mt-56 px-[3%]">
        <div className="flex justify-center items-center gap-20 ">
          <div className="w-1/2">
            <p className="text-secondary tracking-wide font-semibold">
              SIAPA YANG BISA BERGABUNG
            </p>
            <h1 className="text-4xl font-bold text-primary max-w-lg my-6">
              Skema Peningkatan Skill Untuk Semua
            </h1>
            <div className="mt-4 grid grid-cols-2 gap-6">
              {SkillFeatured.map((item, i) => (
                <div key={i} className="w-32">
                  <div className="flex items-center gap-4">
                    <h1 className="font-bold text-primary">0{item.id}</h1>
                    <img
                      src={item.img}
                      alt="imgwhocanjoin"
                      className="w-20 h-20"
                    />
                  </div>
                  <p className="font-semibold text-sm text-center mt-4">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[40%]">
            <img src={skillimg} alt="skillimg" className="w-full" />
          </div>
        </div>
      </section>

      <section className="mt-20 px-[3%]">
        <Header title1="Course" title2="Popular" />

        <div className="mt-6 flex justify-center items-center gap-7 flex-wrap ">
          {course.map((course) => (
            <CardCourse course={course} key={course.id}/>
          ))}
        </div>
        <Link to={'/course'}>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-primary px-3 py-1 rounded-xl text-white  font-semibold hover:scale-105 transition-all w-52 ">
              Lihat Semua Course
            </button>
          </div>
        </Link>
      </section>

      <section className="mt-20 bg-[#F3F3F3] px-[3%] py-10 ">
        <Header title1="Pencapaian" title2="Kami" />
        <div className="flex justify-center items-center mt-10 gap-32">
          <div className="w-1/2">
            <img src={achievimg} alt="achievementimg" className="w-full" />
          </div>
          <div className="w-1/2 px-16">
            <div
              className="flex items-center justify-evenly gap-10
            "
            >
              <CardAchievment title={'Students Enrolled'} count={'100'} />
              <CardAchievment title={'Course tersedia'} count={'50'} />
            </div>
            <div className="bg-white rounded-lg shadow-2xl flex justify-center items-center gap-10 mt-5 p-6 ">
              <h1 className="text-5xl font-extrabold text-secondary">75%</h1>
              <p className="max-w-46">
                Para mahasiswa berhasil meraih karir di perusahaan ternama.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[3%] mt-20 py-10">
        <h1 className="text-4xl font-extrabold text-primary max-w-lg">
          Kenali Mentor & Trainers
          <span className="text-secondary"> Professional Kami</span>
        </h1>

        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <div className="flex justify-center items-center">
            {DataMentor.map((mentor) => (
              <SwiperSlide>
                <div
                  className="w-[30rem] bg-white rounded-2xl shadow-2xl p-4 mt-16 cursor-pointer"
                  key={mentor.id}
                >
                  <div className="flex justify-evenly gap- items-center">
                    <div className="w-32 h-32 rounded-full">
                      <img
                        src={mentorsimg}
                        alt="mentor"
                        className="w-full rounded-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-bold ">{mentor.name}</h1>
                      <p className="text-lg text-secondary">{mentor.job}</p>
                      <div className="flex items-center gap-2 my-4 ">
                        <div className="w-20">
                          <img
                            src={star}
                            alt="star"
                            width={80}
                            className="w-full"
                          />
                        </div>
                        <small>{mentor.review} Reviews</small>
                      </div>
                      <div className="flex items-center gap-7 text-sm">
                        <div className="flex items-center gap-3">
                          <IoMdPaper size={20} className="text-secondary" />
                          <p>{mentor.modul} Modul</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaUsers size={20} className="text-secondary" />
                          <p>{mentor.review} Pelajar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 px-3 text-sm text-left text-gray-800 leading-6">{mentor.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>

      <Footer/>
    </>
  );
}

export default App
