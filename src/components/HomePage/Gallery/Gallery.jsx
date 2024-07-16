import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Example = () => {
  return (
    <div className="mt-20">
      <div className="flex h-20 items-center justify-center"></div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-primary">
      <h1 className="text-4xl font-bold text-white text-center pt-8">
        Dokumentasi <span className="text-secondary">Program</span>
      </h1>

      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <img
        src={card.url}
        alt="cardimg"
        className="absolute w-full h-full object-cover inset-0 z-0 transition-transform duration-300 group-hover:scale-110 "
      />
    </div>
  );
};

export default Example;

const cards = [
  {
    url: '/images.jpeg',
    title: 'Title 1',
    id: 1,
  },
  {
    url: '/kegiatan2.jpeg',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/kegiatan3.jpeg',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/kegiatan4.jpeg',
    title: 'Title 4',
    id: 4,
  },
  {
    url: '/kegiatan5.jpeg',
    title: 'Title 5',
    id: 5,
  },
  {
    url: '/kegiatan6.png',
    title: 'Title 6',
    id: 6,
  },
  {
    url: '/kegiatan2.jpeg',
    title: 'Title 7',
    id: 7,
  },
];
