import styles from './navBar.module.css';
import Button from '@components/button/Button';
import Icon from '../icon/icon';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <Button href="#" extraClass={styles.button}>
          <Icon icon="inbox" />
          Входящие
        </Button>
      </nav>
    </div>
  );
};

export default NavBar;
