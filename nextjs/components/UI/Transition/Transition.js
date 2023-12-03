import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.25,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.25,
    },
  },
};

export default function Transition({ children }) {
  const { asPath } = useRouter();

  return (
    <div>
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
