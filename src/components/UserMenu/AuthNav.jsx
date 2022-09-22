import { NavLink } from 'react-router-dom';
import styles from '../UserMenu/UserMenu.module.css';

const itemsNav = [
  { href: 'register', title: 'Register' },
  { href: 'login', title: 'Login' },
];

export const AuthNav = () => {
  return (
    <div className={styles.containerN}>
      {itemsNav.map(({ href, title }) => (
        <NavLink
          to={href}
          key={href}
          className={({ isActive }) =>
            isActive ? `${styles.linkN} ${styles.activeN}` : `${styles.linkN}`
          }
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};