import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import { FaMinus } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
import { faq } from '../components/faq/faqItem';
import Footer from '../components/Footer/Footer';
import vol from '../assets/vol_faq.png';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Faq() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <motion.main
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative font-sans"
    >
      <Navbar />
      <div className="pb-72 pt-32 px-[5%] bg-secondary rounded-b-[10rem]">
        <h1 className="text-center text-4xl text-white font-bold">
          Pertanyaan yang Sering Diajukan
        </h1>
      </div>
      <img src={vol} alt="vol" className="absolute left-5  w-20 -z-10" />
      <div className="w-[90%] mx-auto -mt-56">
        <Accordion
          allowMultiple
          className=" bg-white lg:p-10 p-3 rounded-xl shadow-xl "
        >
          {faq.map((item, index) => (
            <AccordionItem key={index} className="pb-10">
              {({ isExpanded }) => (
                <>
                  <h1>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        className="font-semibold text-lg"
                      >
                        {item.ques}
                      </Box>
                      {isExpanded ? (
                        <FaMinus size={30} className="text-secondary" />
                      ) : (
                        <IoMdAdd size={30} className="text-secondary" />
                      )}
                    </AccordionButton>
                  </h1>
                  <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Footer />
    </motion.main>
  );
}
