import Header from '../components/Header/Header';
import SkillCard from '../components/SkillCard/SkillCard';
import { skills } from '../data/skills';
import styles from '../styles/About.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>My Skills & Certificates</h1>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </main>
    </div>
  );
}