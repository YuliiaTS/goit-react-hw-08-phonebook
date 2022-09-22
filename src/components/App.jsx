import { Routes, Route } from 'react-router-dom';
import { getIsRefreshed } from 'redux/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AppBar } from './UserMenu/AppBar';
import { Navigation } from './UserMenu/Navigation';
import { AuthNav } from './UserMenu/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { getIsLoggedIn } from '../redux/auth/authSelectors';
import { fetchCurrentUser } from '../redux/auth/authOperations';

import PrivateRoute from './PrivateRoutes/PrivateRoutes';
import PublicRoute from './PublicRoute/PublicRoute';

import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Home/Home' /* webpackChunkName: "Home" */));
const Contacts = lazy(() =>
  import('./Contacts/Contacts' /* webpackChunkName: "Contacts" */)
);
const RegisterForm = lazy(() =>
  import('./RegisterForm/RegisterForm' /* webpackChunkName: "RegisterForm" */)
);
const LoginForm = lazy(() =>
  import('./LogInForm/LogInForm' /* webpackChunkName: "LoginForm" */)
);

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshed = useSelector(getIsRefreshed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshed && (
      <>
        <AppBar>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </AppBar>
        <Suspense>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterForm />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginForm />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </>
    )
  );
}