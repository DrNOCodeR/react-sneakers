import styles from './themeSwitcher.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contenxt/ThemeContext';
import Icon from '../icon/icon';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = (event) => {
    setTheme(theme === 'light' ? 'dark' : 'light');

    event.currentTarget.blur();
  };

  return (
    <button
      type="button"
      className={`${styles.wrap} ${styles[theme]}`}
      onClick={handleClick}
    >
      <div>
        <Icon
          icon="sun"
          fill={theme === 'dark' ? 'var(--base-600)' : 'var(--base-white)'}
        />
      </div>
      <div>
        <Icon
          icon="moon"
          fill={theme !== 'dark' ? 'var(--base-600)' : 'var(--base-white)'}
        />
      </div>
    </button>
  );
};

export default ThemeSwitcher;
