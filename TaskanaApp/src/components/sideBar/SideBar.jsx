import Statistic from '@components/statistic/Statistic';
import styles from './sideBar.module.css';

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <Statistic />
    </aside>
  );
};

export default SideBar;
