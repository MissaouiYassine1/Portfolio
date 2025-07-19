// src/components/Header/Header.jsx
import { useState } from 'react';
import styles from './Header.module.scss';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1>My Portfolio</h1>

      <nav className={styles.desktopNav}>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
      </nav>

      <button
        className={styles.burger}
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
        </div>
      )}
    </header>
  );
}
