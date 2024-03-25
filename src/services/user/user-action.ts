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
import { deleteCookie, getCookie, setCookie } from './/..//../utils/cookie';

export const fetchRegister = createAsyncThunk(
  'register/fetchRegister',
  async ({ email, name, password }: TRegisterData) => {
    const response = await registerUserApi({ email, name, password });
    setCookie('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    return response.user;
  }
);

export const fetchLogin = createAsyncThunk(
  'login/fetchLogin',
  async (data: TLoginData) => {
    const response = await loginUserApi(data);
    setCookie('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    return response.user;
  }
);

export const checkUserAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { dispatch }) => {
    if (getCookie('accessToken')) {
      console.log('accessToken есть в куке');
      getUserApi()
        .then((response) => dispatch(setUser(response.user)))
        .catch(() => {
          deleteCookie('accessToken');
          localStorage.removeItem('refreshToken');
          console.log('accessToken и refreshToken удалены');
        })
        .finally(() => dispatch(setIsAuthChecked(true)));
    } else {
      dispatch(setIsAuthChecked(true));
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await logoutApi();
  deleteCookie('accessToken');
  localStorage.removeItem('refreshToken');
});
