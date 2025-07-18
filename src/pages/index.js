import Header from '../components/Header/Header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>I build modern web apps with Next.js!</p>
      </main>
    </div>
  );
}