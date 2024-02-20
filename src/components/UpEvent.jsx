import styles from "./UpEvent.module.css";

function UpEvent({ upevent }) {
  return (
    <li className={styles.upEvent}>
      <span>{upevent.city}</span>
      <span>{upevent.date}</span>
    </li>
  );
}

export default UpEvent;
