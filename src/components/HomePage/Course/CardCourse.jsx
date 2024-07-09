import { FaCloudArrowDown } from 'react-icons/fa6';
import { MdPushPin } from 'react-icons/md';
import { PiTelevisionSimpleBold } from 'react-icons/pi';

export default function CardCourse({ course }) {
  return (
    <div className="w-[17rem] h-96 hover:shadow-2xl cursor-pointer transition-all " key={course.id}>
      <div className=" bg-primary rounded-xl h-64 shadow-xl ">
        <img src={course.imgs} alt="courseimg" className="w-20 mx-auto pt-5" />
      </div>
      <div className="bg-white shadow-xl  mx-4 rounded-2xl text-center -mt-32 p-3">
        <h1 className="text-xl font-bold">{course.name}</h1>
        <p className="text-xs pt-2">
          {course.desc
            ? course.desc.length > 70
              ? course.desc.slice(0, 70) + '...'
              : course.desc
            : 'No Description'}
        </p>
        <div className="flex justify-center items-center gap-2 mt-4">
          <button className="flex items-center justify-center gap-1 border border-secondary p-1 rounded-full hover:scale-105 transition-all ">
            <PiTelevisionSimpleBold size={15} className="text-secondary" />
            <p className="text-xs text-tertiary font-semibold">Live Demo</p>
          </button>
          <button className="flex items-center justify-center gap-1 border border-secondary p-1 rounded-full hover:scale-105 transition-all">
            <MdPushPin size={15} className="text-secondary" />
            <p className="text-xs text-tertiary font-semibold">Enroll Now</p>
          </button>
        </div>

        <button className="flex items-center justify-center bg-secondary rounded-full mt-4 mx-auto px-3 py-2 gap-2 text-white hover:bg-white hover:text-secondary transition-all">
          <FaCloudArrowDown size={20} />
          <p className="text-sm">Download Curiculum</p>
        </button>
      </div>
    </div>
  );
}
