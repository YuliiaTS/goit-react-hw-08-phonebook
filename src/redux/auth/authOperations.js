import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { register } from '../../services/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await register(newUser);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
