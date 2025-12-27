import styles from './DogCard.module.css';

export default function DogCard({ image, fact }) {
  return (
    <div className={styles.card}>
      {image && <img className={styles.img} src={image} alt="Dog" />}
      {fact && <p>{fact}</p>}
    </div>
  );
}
