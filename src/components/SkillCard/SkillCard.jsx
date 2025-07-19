// src/components/SkillCard.jsx
import styles from './SkillCard.module.scss';
import { skillIcons } from '../../data/skills';

export default function SkillCard({ skill, level, certificate }) {
  const iconSrc = skillIcons[skill] || skillIcons.Default;

  const normalizedCertificate = certificate?.endsWith('.jpg')
    ? certificate
    : `${certificate}.pdf`;

  return (
    <div className={styles.skillCard}>
      <div className={styles.header}>
        <img
          src={iconSrc}
          alt={`${skill} icon`}
          className={styles.icon}
        />
        <h3>{skill}</h3>
      </div>

      <p>Level: {level}</p>

      {certificate && (
        <div className={styles.certificateContainer}>
          <p>Certificate:</p>
          <iframe
            src={`/certificates/${normalizedCertificate}`}
            title={`${skill} Certificate`}
            width="100%"
            height="100%"
            scrolling="no"
          ></iframe>
        </div>
      )}
    </div>
  );
}
