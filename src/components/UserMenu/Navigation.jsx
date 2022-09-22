import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import styles from '../UserMenu/UserMenu.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    isLoggedIn && (
      <nav>
        <NavLink
          to={'contacts'}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
          }
        >
          Contacts
        </NavLink>
      </nav>
    )
  );
};
