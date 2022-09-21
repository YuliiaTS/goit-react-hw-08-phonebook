import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { registerUser } from 'redux/auth/authOperations';
import styles from '../RegisterForm/RegisterForm.module.css';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  
  const onFormSubmit = e => {
    e.preventDefault();

    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Box
      component="form"
      sx={{
        width: 300,
        margin: '0 auto',
        paddingTop: '100px',
        textAlign: 'center',
      }}
      onSubmit={onFormSubmit}
    >
      <h2 className={styles.signUpTitle}>Sign Up</h2>
      <TextField
        sx={{
          marginBottom: 2,
          width: 300,
        }}
        label="Name"
        type="text"
        name="name"
        autoComplete="off"
        onChange={e => setName(e.target.value)}
        value={name}
        required={true}
      />
      <TextField
        sx={{
          marginBottom: 2,
          width: 300,
        }}
        label="Email"
        type="email"
        name="email"
        autoComplete="off"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required={true}
      />
      <TextField
        sx={{
          marginBottom: 2,
          width: 300,
        }}
        label="Password"
        type="password"
        name="password"
        autoComplete="off"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required={true}
      />
      <Button
        sx={{
          width: '100%',
          fontWeight: 600,
          color: 'cornflowerblue',
        }}
        type="submit"
        variant="text"
      >
        Sign Up
      </Button>
      <div className={styles.signWrap}>
        <p className={styles.signUpText}>or</p>
        <Link to="/login" className={styles.signUpLink}>
          Log In
        </Link>
        <p className={styles.signUpText}> as a user</p>
      </div>
    </Box>
    
  );
}