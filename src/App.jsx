import Navbar from "./components/Navbar/Navbar"
import heroimg from './assets/heroimg.png'
import { skillHighlight } from './components/Main/Hero/skillHighlight';
import { AiFeatures } from './components/Main/Ai/AiFeatures';
import volcadot from './assets/volcadot.png';
import skillimg from './assets/skillimg.png';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { MdPushPin } from 'react-icons/md';
import { FaCloudArrowDown } from 'react-icons/fa6';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import { SkillFeatured } from './components/Main/WhoCanJoin/SkillFeatured';
import { CourseList } from './components/Course/CourseList';
import { Link } from 'react-router-dom';

function App() {
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

      <section className="mt-20 w-full px-[3%]  pb-20 relative">
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

      <section className="mt-20 px-[3%]">
        <div className="flex justify-center items-center gap-20 ">
          <div className="w-1/2">
            <p className="text-secondary tracking-wide font-semibold">
              SIAPA YANG BISA BERGABUNG
            </p>
            <h1 className="text-4xl font-bold text-primary max-w-lg my-6">
              Skema Peningkatan Skill Untuk Semua
            </h1>
            <div className="mt-4 grid grid-cols-2 gap-6">
              {SkillFeatured.map((item) => (
                <div key={item.id} className="w-32">
                  <div className="flex items-center gap-4">
                    <h1 className="font-bold text-primary">0{item.id}</h1>
                    <img src={item.img} alt="imgwhocanjoin" className="w-16" />
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
        <h1 className="text-3xl font-bold text-primary text-center">
          Popular <span className="text-secondary">Course</span>
        </h1>

        <div className="mt-6 flex justify-center items-center gap-7 flex-wrap ">
          {CourseList.map((course) => (
            <div className="w-[17rem] h-96" key={course.id}>
              <div className=" bg-primary rounded-xl h-64 ">
                <img
                  src={course.img}
                  alt="courseimg"
                  className="w-20 mx-auto pt-5"
                />
              </div>
              <div className="bg-white  mx-4 rounded-2xl text-center -mt-32 p-3">
                <h1 className="text-xl font-bold">{course.title}</h1>
                <p className="text-xs pt-2">
                  {course.desc
                    ? course.desc.length > 50
                      ? course.desc.slice(0, 70) + '...'
                      : course.desc
                    : 'No Description'}
                </p>
                <div className="flex justify-center items-center gap-2 mt-4">
                  <button className="flex items-center justify-center gap-1 border border-secondary p-1 rounded-full ">
                    <PiTelevisionSimpleBold
                      size={15}
                      className="text-secondary"
                    />
                    <p className="text-xs text-tertiary font-semibold">
                      Live Demo
                    </p>
                  </button>
                  <button className="flex items-center justify-center gap-1 border border-secondary p-1 rounded-full ">
                    <MdPushPin size={15} className="text-secondary" />
                    <p className="text-xs text-tertiary font-semibold">
                      Enroll Now
                    </p>
                  </button>
                </div>

                <button className="flex items-center justify-center bg-secondary rounded-full mt-4 mx-auto px-3 py-2 gap-2">
                  <FaCloudArrowDown size={20} className="text-white" />
                  <p className="text-white text-sm">Download Curiculum</p>
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link to={'/course'}>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-primary px-3 py-1 rounded-xl text-white  font-semibold hover:scale-105 transition-all w-52 ">
              View All Course
            </button>
          </div>
        </Link>
      </section>

      <section className="mt-20">

      </section>
    </>
  );
}

export default App
