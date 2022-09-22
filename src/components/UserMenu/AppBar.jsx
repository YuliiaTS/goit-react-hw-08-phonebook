import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
      <Container
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
  );
};