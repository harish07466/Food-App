import { motion } from "framer-motion";
import styles from "./container.module.css";

export default function Container({ children }) {
  return (
    <motion.div
      className={styles.parentContainer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
