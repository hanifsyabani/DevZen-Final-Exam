import CountUp from 'react-countup';
import { PiStudentFill } from 'react-icons/pi';
import { SlBookOpen } from 'react-icons/sl';

export default function CardAchievment({ title, count }) {
  return (
    <div className="w-44 h-44 bg-white rounded-lg shadow-2xl flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-extrabold text-primary text-center">
          <CountUp start={0} end={count} duration={5} />
        </h1>
        <div className="flex items-center justify-center mt-2 gap-2 ">
          {count === '100' ? (
            <PiStudentFill size={40} />
          ) : (
            <SlBookOpen size={40} />
          )}

          <div className="max-w-20 ">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
