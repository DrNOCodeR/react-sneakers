import styles from './statistic.module.css';
import Illustration from '../illustration/Illustration';

const Statistic = () => {
  return (
    <div className={styles.empty_state}>
      <Illustration illustration="taskbook" />
      <p>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
        и&nbsp;самочувствие.
      </p>
    </div>
  );
};

export default Statistic;
