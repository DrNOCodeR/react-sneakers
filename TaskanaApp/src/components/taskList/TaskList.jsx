import styles from './taskList.module.css';
import Illustration from '../illustration/Illustration';

const TaskList = ({ tasks }) => {
  const emptyStateHTML = (
    <div className={styles.empty_state}>
      <h2>Все твои задачи организованы как надо</h2>
      <p>Отличная работа! Ты большой молодец!</p>
      <Illustration illustration="done" />
    </div>
  );

  const tasksHTML = (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );

  return (
    <div className={styles.wrap}>
      {!tasks.length ? emptyStateHTML : tasksHTML}
    </div>
  );
};

export default TaskList;
