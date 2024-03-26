import {
  TLoginData,
  TRegisterData,
  getOrdersApi,
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  updateUserApi
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
    const a = getCookie('accessToken');
    const b = localStorage.getItem('refreshToken');
    console.log('Cookie при регистрации', a);
    console.log('localStorage при регистрации', b);
    return response.user;
  }
);

export const fetchLogin = createAsyncThunk(
  'login/fetchLogin',
  async (data: TLoginData) => {
    const response = await loginUserApi(data);
    setCookie('accessToken', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    const a = getCookie('accessToken');
    const b = localStorage.getItem('refreshToken');
    console.log('Cookie при логине', a);
    console.log('localStorage при логине', b);
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
      console.log('accessToken нет в куке');
      dispatch(setIsAuthChecked(true));
    }
  }
);

export const fetchUpdateUser = createAsyncThunk(
  'updateUser/fetchupdateUser',
  async (user: Partial<TRegisterData>, { dispatch }) => {
    updateUserApi(user)
      .then((response) => dispatch(setUser(response.user)))
      .catch(() => {
        console.log('Введены некорректные данные для обновления профиля!');
      });
  }
);

export const fetchProfileOrders = createAsyncThunk(
  'profileOrders/fetchProfileOrders',
  async () => {
    const response = await getOrdersApi();
    console.log('заказы пользователя', response);
    return response;
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await logoutApi();
  deleteCookie('accessToken');
  localStorage.removeItem('refreshToken');
});
