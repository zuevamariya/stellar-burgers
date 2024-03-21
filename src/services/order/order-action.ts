import { orderBurgerApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOrderBurger = createAsyncThunk(
  'orderBurger/fetchOrderBurger',
  async (data: string[]) => {
    const response = await orderBurgerApi(data);
    return response;
  }
);
