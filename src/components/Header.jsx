import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Мир собак</h1>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Главная страница</NavLink>
        <NavLink to="/random-dog" className={({ isActive }) => isActive ? styles.active : ''}>Случайная собака</NavLink>
        <NavLink to="/dog-facts" className={({ isActive }) => isActive ? styles.active : ''}>Факты</NavLink>
      </nav>
    </header>
  );
}
