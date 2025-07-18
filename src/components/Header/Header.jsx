import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>My Portfolio</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}