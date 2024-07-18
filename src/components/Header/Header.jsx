import { motion } from 'framer-motion';
export default function Header({ title1, title2 }) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, bounce: 0.3 }}
        className="text-3xl font-bold text-primary text-center"
      >
        {title1} <span className="text-secondary">{title2}</span>
      </motion.h1>
    </>
  );
}
