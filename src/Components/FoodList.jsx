import { motion, AnimatePresence } from "framer-motion";
import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";

export default function FoodList({ foodData, setFoodId }) {
  if (!foodData.length) {
    return (
      <strong>
        <p className={styles.emptyText}>😋 Search for a Recipe Above 🍽️</p>
      </strong>
    );
  }

  return (
    <motion.div
      className={styles.foodGrid}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <AnimatePresence>
        {foodData.map((food, index) => (
          <motion.div
            key={food.id}
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{
              delay: index * 0.07,
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <FoodItem setFoodId={setFoodId} food={food} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
