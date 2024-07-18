import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { PiStudentFill } from 'react-icons/pi';
import { SlBookOpen } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer';

export default function CardAchievment({ title, count }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div
      className="w-44 h-44  bg-white rounded-lg shadow-2xl hover:text-white flex justify-center items-center hover:bg-secondary transition-all group cursor-pointer"
      ref={ref}
    >
      <div>
        <h1 className="text-5xl font-extrabold text-primary group-hover:text-white text-center">
          {startCount && <CountUp start={0} end={count} duration={5} />}
        </h1>
        <div className="flex items-center justify-center mt-2 gap-2 ">
          {count === '100' ? (
            <PiStudentFill size={40} />
          ) : (
            <SlBookOpen size={40} />
          )}

          <div className="max-w-20  ">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
