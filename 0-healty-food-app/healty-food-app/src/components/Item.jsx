import styles from "./Item.module.css";

const Item = ({ item, bought, handleBuyButton }) => {

  return (
    <li className={`list-group-item ${styles.hrItem} ${bought && "active"}`}>
      <span className={styles.hrSpan}>{item}</span>
      <button
        className={`btn btn-info ${styles.button}`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
