import {
  TLoginData,
  TRegisterData,
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi
} from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setIsAuthChecked, setUser } from './user-slice';

export const fetchRegister = createAsyncThunk(
  'register/fetchRegister',
  async (data: TRegisterData) => {
    const response = await registerUserApi(data);
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    return response.user;
  }
);

export const fetchLogin = createAsyncThunk(
  'login/fetchLogin',
  async (data: TLoginData) => {
    const response = await loginUserApi(data);
    localStorage.setItem('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    return response.user;
  }
);

export const checkUserAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { dispatch }) => {
    if (localStorage.getItem('accessToken')) {
      getUserApi()
        .then((response) => dispatch(setUser(response.user)))
        .catch(() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        })
        .finally(() => dispatch(setIsAuthChecked(true)));
    } else {
      dispatch(setIsAuthChecked(true));
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await logoutApi();
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
});
