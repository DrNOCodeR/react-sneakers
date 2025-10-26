import styles from './button.module.css';

const Button = ({ extraClass, href, children, type = 'button', disabled }) => {
  return href ? (
    <a href={href} className={`${extraClass} ${styles.button}`}>
      {children}
    </a>
  ) : (
    <button
      disabled={disabled}
      className={`${extraClass} ${styles.button}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
