import { useState, useEffect } from 'react';
import DogCard from '../components/DogCard';
import styles from './DogFacts.module.css';

export default function DogFacts() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const localFacts = [
      "Собаки умеют чувствовать эмоции человека.",
      "У собак лучшее обоняние среди млекопитающих.",
      "Собаки понимают более 200 слов.",
      "Чихуахуа — самая маленькая порода собак.",
      "Собаки могут видеть в темноте лучше человека."
    ];

    // Перемешиваем массив для рандома
    setFacts(localFacts.sort(() => 0.5 - Math.random()));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Факты о собаках</h2>
      <div className={styles.grid}>
        {facts.map((fact, i) => <DogCard key={i} fact={fact} />)}
      </div>
    </div>
  );
}
