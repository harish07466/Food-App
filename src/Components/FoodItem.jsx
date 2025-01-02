import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image}></img>
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title} </p>
      </div>
      <div className={styles.buttonConatiner}>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.itemBtn}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
