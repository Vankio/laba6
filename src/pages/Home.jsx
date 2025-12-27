import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Добро пожаловать в Мир собак!</h2>
      <p>Здесь вы можете увидеть случайных собак и узнать интересные факты о них.</p>
    </div>
  );
}
