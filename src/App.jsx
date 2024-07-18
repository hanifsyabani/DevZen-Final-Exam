import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import { skillHighlight } from './components/HomePage/Hero/skillHighlight';
import { AiFeatures } from './components/HomePage/Ai/AiFeatures';
import CardCourse from './components/HomePage/Course/CardCourse';
import { SkillFeatured } from './components/HomePage/WhoCanJoin/SkillFeatured';
import { TextParallax } from './components/HomePage/Gallery/TextParallax';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CardAchievment from './components/HomePage/Achievment/CardAchievment';
import { DataMentor } from './components/HomePage/Mentors/DataMentors';
import Gallery from './components/HomePage/Gallery/Gallery';

import heroimg from './assets/heroimg.png';
import volcadot from './assets/volcadot.png';
import skillimg from './assets/skillimg.png';
import { FaUsers } from 'react-icons/fa6';
import achievimg from './assets/achiev.png';
import mentorsimg from './assets/mentor.jpg';
import star from './assets/star.png';
import { IoMdPaper } from 'react-icons/io';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from './service/Firebase';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  delay,
} from 'framer-motion';

import { wrap } from '@motionone/utils';

function App() {
  const [course, setcourse] = useState([]);

  // get data
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // text berjalan
  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="parallax">
        <motion.div
          className="scroller lg:text-5xl text-primary font-sans opacity-30 italic"
          style={{ x }}
        >
          <span>{children} </span>
          <img src="/logo.svg" alt="logo" />
          <span className="text-secondary">{children} </span>
          <img src="/logo.svg" alt="logo" />
          <span>{children} </span>
        </motion.div>
      </div>
    );
  }
  // text berjalan

  return (
    <div className="font-sans">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar />
      <section className="px-[3%] py-20 lg:flex font-sans">
        <div className="lg:w-1/2 pt-16">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="lg:text-6xl text-4xl font-bold text-primary lg:max-w-xl text-center lg:text-left"
          >
            Transformasi Diri untuk Masa Depan Gemilang
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="pt-6 text-lg lg:text-left text-center text-tertiary max-w-md"
          >
            Dapatkan skill yang anda butuhkan untuk mencapai masa depan
          </motion.p>

          <div className="flex items-center lg:justify-start justify-center flex-wrap gap-4 mt-14">
            {skillHighlight.map((item, index) => (
              <motion.div
                initial={{ top: 100, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3 * index }}
                key={item.id}
                className="bg-[#F2F4F8] hover:bg-secondary ease-linear duration-300 py-2 px-4 rounded-lg w-46 group text-center cursor-pointer"
              >
                <h1 className="group-hover:text-white text-gray-500 font-semibold">
                  {item.title}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:w-1/2"
        >
          <img src={heroimg} />
        </motion.div>
      </section>

      <section className="mb-32">
        <ParallaxText baseVelocity={-5}>Dev Zen Course</ParallaxText>
        <ParallaxText baseVelocity={5}>Temukan kursus terbaik </ParallaxText>
      </section>

      <section className="my-20 w-full px-[3%] relative">
        <div className="lg:flex items-center justify-center">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h1 className="lg:text-5xl text-3xl font-bold text-primary lg:tracking-wide lg:leading-[3.2rem] lg:text-left text-center">
              Platform Pembelajaran Online{' '}
              <span className="text-secondary">Berbasis AI di Indonesia</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 'auto',
                  spaceBetween: 30,
                },
              }}
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
                      className="bg-[#FFF2EA] rounded-lg flex items-center w-full justify-between text-left h-52 p-4 gap-2 cursor-pointer border border-secondary"
                      key={item.id}
                    >
                      <div className="lg:w-1/2">
                        <h1 className="text-2xl">Ai Based</h1>
                        <h1 className="text-2xl font-bold text-secondary">
                          {item.title}
                        </h1>
                      </div>
                      <div className="lg:w-1/2 w-32">
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
          </motion.div>
        </div>

        <motion.img
          initial={{ bounce: 0, opacity: 0 }}
          whileInView={{ bounce: 0.5, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          src={volcadot}
          alt="volcadot"
          className="w-44 mt-3 absolute -left-1"
        />
      </section>

      <section className="mt-56 px-[3%]">
        <div className="lg:flex justify-center items-center gap-20 ">
          <motion.div
            className="lg:w-1/2"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <p className="text-secondary tracking-wide font-semibold">
              SIAPA YANG BISA BERGABUNG
            </p>
            <h1 className="text-4xl font-bold text-primary max-w-lg my-6">
              Skema Peningkatan Skill Untuk Semua
            </h1>
            <div className="mt-4 grid grid-cols-2 gap-6">
              {SkillFeatured.map((item) => (
                <div key={item.id} className="w-36">
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
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-[40%] hidden lg:block"
          >
            <img src={skillimg} alt="skillimg" className="w-full" />
          </motion.div>
        </div>
      </section>

      <section className="lg:mt-44 mt-32 px-[3%]">
        <Header title1="Course" title2="Popular" />

        <div className="mt-6 grid grid-cols-2  lg:flex justify-center items-center gap-7 flex-wrap ">
          {course.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, bounce: 0.3 }}
            >
              <CardCourse course={course} />
            </motion.div>
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

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20 bg-[#F3F3F3] px-[3%] py-10 "
      >
        <Header title1="Pencapaian" title2="Kami" />
        <div className="lg:flex justify-center items-center mt-10 gap-32">
          <div className="lg:w-1/2">
            <img src={achievimg} alt="achievementimg" className="w-full" />
          </div>
          <div className="lg:w-1/2 lg:px-16">
            <div
              className="flex items-center justify-evenly gap-10 mt-10 lg:mt-0
            "
            >
              <CardAchievment title={'Students Enrolled'} count={'100'} />
              <CardAchievment title={'Course tersedia'} count={'50'} />
            </div>
            <div className="bg-white rounded-lg shadow-2xl flex justify-center items-center gap-10 mt-5 p-6 hover:bg-primary hover:text-white transition-all cursor-pointer ">
              <h1 className="text-5xl font-extrabold text-secondary">75%</h1>
              <p className="max-w-46">
                Para mahasiswa berhasil meraih karir di perusahaan ternama.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section>
        <Gallery />
      </section>

      <section className="px-[3%] mt-20 py-10">
        <h1 className="text-4xl font-extrabold text-primary max-w-lg">
          Kenali Mentor & Trainers
          <span className="text-secondary"> Professional Kami</span>
        </h1>

        <Swiper
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
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
                    <div className="lg:w-32 lg:h-32 h-20 w-20  rounded-full">
                      <img
                        src={mentorsimg}
                        alt="mentor"
                        className="w-full rounded-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h1 className="lg:text-2xl text-xl font-bold ">
                        {mentor.name}
                      </h1>
                      <p className="lg:text-lg text-secondary">{mentor.job}</p>
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
                  <p className="mt-5 px-3 text-sm text-left text-gray-800 leading-6">
                    {mentor.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>

      <section>
        <TextParallax />
      </section>

      <Footer />
    </div>
  );
}

export default App;
