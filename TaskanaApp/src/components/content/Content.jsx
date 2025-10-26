import IncomingTasks from '@pages/incomingTasks/IncomingTasks';
import NavBar from '@components/navBar/NavBar';
import SideBar from '@components/sideBar/SideBar';
import styles from './content.module.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <NavBar />
      <div className={styles.wrap}>
        <IncomingTasks />
      </div>
      <SideBar />
    </div>
  );
};

export default Content;
