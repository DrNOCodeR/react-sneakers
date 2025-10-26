import TaskList from '@components/taskList/TaskList';

import styles from './mainContainer.module.css';

const MainContainer = () => {
  const tasks = [];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Входящие</h1>
      <TaskList tasks={tasks} />
    </main>
  );
};

export default MainContainer;
