import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaCode } from 'react-icons/fa';
import styles from './SkillCard.module.scss';

const skillIcons = {
  HTML: <FaHtml5 color="#e34c26" />,
  CSS: <FaCss3Alt color="#264de4" />,
  JavaScript: <FaJs color="#f7df1e" />,
  React: <FaReact color="#61dbfb" />,
  Python: <FaPython color="#306998" />,
  Java: <FaJava color="#f89820" />,
  Default: <FaCode color="#444" />
};

export default function SkillCard({ skill, level, certificate }) {
  const icon = skillIcons[skill] || skillIcons.Default;

  return (
    <div className={styles.skillCard}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
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
