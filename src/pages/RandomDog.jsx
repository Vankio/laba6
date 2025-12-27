import { useState, useEffect } from 'react';
import DogCard from '../components/DogCard';
import styles from './RandomDog.module.css';

export default function RandomDog() {
  const [dog, setDog] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      setDog(data.message);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => { fetchDog(); }, []);

  return (
    <div className={styles.container}>
      <h2>Случайная собака</h2>
      {loading ? <p>Загрузка...</p> : <DogCard image={dog} />}
      <button className={styles.button} onClick={fetchDog}>Показать другую собаку</button>
    </div>
  );
}
