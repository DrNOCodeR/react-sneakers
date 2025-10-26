import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Проект выполнен в рамках стажировки{' '}
      <a target="_blank" href="https://preax.ru/">
        PREAX
      </a>
    </footer>
  );
};

export default Footer;
