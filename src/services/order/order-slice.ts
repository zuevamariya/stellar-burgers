import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type TOrderBurger = {
  orderRequest: boolean;
  order: TOrder | null;
  name: string;
};

const initialState: TOrderBurger = {
  orderRequest: false,
  order: null,
  name: ''
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderRequest: (state) => {
      state.orderRequest = true;
    },
    setOrder: (state, action: PayloadAction<TOrder>) => {
      state.order = action.payload;
    },
    setOrderName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  },
  selectors: {
    getOrderRequest: (state) => state.orderRequest,
    getOrder: (state) => state.order,
    getOrderName: (state) => state.name
  }
});

export default orderSlice.reducer;

export const { setOrderRequest, setOrder, setOrderName } = orderSlice.actions;

export const { getOrderRequest, getOrder, getOrderName } = orderSlice.selectors;
