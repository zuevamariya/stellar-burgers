import { TRegisterData, registerUserApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRegister = createAsyncThunk(
  'register/fetchRegister',
  async (data: TRegisterData) => {
    const response = await registerUserApi(data);
    return response;
  }
);
