import Content from '@components/content/Content';
import Header from '@components/header/Header';

import styles from './applayout.module.css';
import ThemeProvider from '../../providers/ThemeProvider';

const AppLayout = () => {
  return (
    <ThemeProvider>
      <div className={styles.layout}>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
