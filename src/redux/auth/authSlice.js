import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
} from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshed: false,
  },
  extraReducers: {
    
  },
});