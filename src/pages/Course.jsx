import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../service/Firebase';
import CardCourse from '../components/HomePage/Course/CardCourse';
import Footer from '../components/Footer/Footer';
import { FaSearch } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';

export default function Course() {
  const [course, setcourse] = useState([]);
  const [fillteredCourse, setFilteredCourse] = useState([]);
  const [filter, setFilter] = useState('all');

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const { pathname } = useLocation();

  useEffect(() => {
  
    const getData = async () => {
      const courseCollection = collection(db, 'course');

      try {
        const courseSnapshot = await getDocs(courseCollection);

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    filterCourse();
  }, [filter, course, pathname]);

  const filterCourse = () => {
    let filtered = [...course];

    if (filter === 'all') {
      filtered = course.filter((item) => item.cat !== 'cs');
    } else {
      filtered = course.filter((item) => item.cat === filter);
    }

    setFilteredCourse(filtered);
    // setCurrentPage(0);
  };

  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  const pageCount = Math.ceil(fillteredCourse.length / itemsPerPage);

  return (
    <>
      <Navbar />

      <main className="mt-32">
        <Header title1={'Course'} title2={'List'} />

        <div className="flex justify-between items-center my-10 px-[3%] relative">
          <FaSearch size={20} className="text-primary absolute left-12" />
          <input
            type="search"
            className="pl-10 pr-2 py-2 w-80 outline-none placeholder:text-sm rounded-xl bg-gray-200 text-sm"
            placeholder="Cari Course anda disini..."
          />

          <div className="text-sm flex gap-2">
            <label htmlFor="">Sort by</label>
            <select
              name="filter"
              id="filter"
              className="font-semibold"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Semua</option>
              <option value="popular">Kelas Populer</option>
              <option value="new">Kelas Terbaru</option>
              <option value="cs">Coming Soon</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-center items-center gap-7 flex-wrap bg-gray-100 py-4 ">
          {fillteredCourse
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((course) => (
              <CardCourse course={course} />
            ))}
        </div>

        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageChange}
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
          breakLabel={'...'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          containerClassName={'pagination'}
          activeClassName={'active'}
          className="flex justify-center items-center gap-4"
        />
      </main>

      <Footer />
    </>
  );
}
