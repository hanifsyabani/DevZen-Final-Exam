import { FaCloudArrowDown } from 'react-icons/fa6';
import { MdPushPin } from 'react-icons/md';
import { PiTelevisionSimpleBold } from 'react-icons/pi';

export default function CardCourse({ course }) {
  const sliceDescription = (desc) => {
    if (!desc) return 'No Description';
    const maxLgLength = 80;
    const maxSmLength = 30;
    if (window.innerWidth >= 1024) {
      return desc.length > maxLgLength
        ? desc.slice(0, maxLgLength) + '...'
        : desc;
    } else {
      return desc.length > maxSmLength
        ? desc.slice(0, maxSmLength) + '...'
        : desc;
    }
  };

  const sliceTitle = (title) => {
    if (!title) return 'No Title';
    const maxLgLength = 16;
    const maxSmLength = 10;
    if (window.innerWidth >= 1024) {
      return title.length > maxLgLength
        ? title.slice(0, maxLgLength) + '...'
        : title;
    } else {
      return title.length > maxSmLength
        ? title.slice(0, maxSmLength) + '...'
        : title;
    }
  };
  return (
    <div
      className="lg:w-[17rem] lg:h-96 lg:hover:shadow-2xl cursor-pointer transition-all "
      key={course.id}
    >
      <div className=" bg-primary rounded-xl lg:h-64 h-20 shadow-xl ">
        <img
          src={course.imgs}
          alt="courseimg"
          className="lg:w-20 w-12 mx-auto pt-5"
        />
      </div>
      <div className="lg:bg-white lg:shadow-xl mx-4 rounded-2xl lg:text-center lg:-mt-32 p-3">
        <h1 className="lg:text-xl  font-bold">{sliceTitle(course.name)}</h1>
        <p className="text-xs pt-2 ">{sliceDescription(course.desc)}</p>
        <div className="lg:flex justify-center items-center gap-2 mt-4">
          <button className="flex items-center justify-center gap-1 border border-secondary p-1 rounded-full hover:scale-105 transition-all ">
            <PiTelevisionSimpleBold size={15} className="text-secondary" />
            <p className="text-xs text-tertiary font-semibold ">Live Demo</p>
          </button>
          <button className="flex items-center justify-center gap-1 border border-secondary p-1 rounded-full hover:scale-105 transition-all">
            <MdPushPin size={15} className="text-secondary" />
            <p className="text-xs text-tertiary font-semibold">Enroll Now</p>
          </button>
        </div>

        <button className="flex items-center justify-center bg-secondary rounded-full mt-4 mx-auto px-3 py-2 gap-2 text-white hover:bg-white hover:text-secondary transition-all">
          <FaCloudArrowDown size={20} />
          <p className="text-sm">
            <span className="hidden lg:inline">Download</span> Curiculum
          </p>
        </button>
      </div>
    </div>
  );
}
