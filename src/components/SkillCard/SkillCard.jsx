import styles from './SkillCard.module.scss';
import { skillIcons } from '../../data/skills'; // Importing icons

export default function SkillCard({ skill, level, certificate }) {
  const iconSrc = skillIcons[skill] || skillIcons.Default;

  return (
    <div className={styles.skillCard}>
      <div className={styles.header}>
        <img
          src={iconSrc}
          alt={`${skill} icon`}
          className={styles.icon}
          width="32"
          height="32"
        />
        <h3>{skill}</h3>
      </div>

      <p>Level: {level}</p>

      {certificate && (
        <div className={styles.certificateContainer}>
          <p>Certificate:</p>
          <iframe
            src={`/certificates/${certificate}`}
            title={`${skill} Certificate`}
            width="100%"
            height="400px"
            style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          ></iframe>
        </div>
      )}
    </div>
  );
}
