import Logo from '@components/logo/Logo';
import styles from './header.module.css';
import Button from '@components/button/Button';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import Icon from '../icon/icon';
import { useState } from 'react';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#" rel="noopener noreferrer">
        <Logo />
      </a>
      <div className={styles.controls}>
        <div onClick={handleClick}>
          {isLoading ? (
            <Button extraClass={styles.loading}>
              <Icon icon="loading" color="var(--base-white)" />
            </Button>
          ) : (
            <Button extraClass={styles.button}>
              <Icon icon="plus" />
              Создать
            </Button>
          )}
        </div>

        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
