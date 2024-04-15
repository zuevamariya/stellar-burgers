import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { fetchOrderBurger, fetchOrderNumber } from './order-action';

type TOrderBurger = {
  isLoadingRequest: boolean;
  orderRequest: boolean;
  order: TOrder | null;
  error: string | null;
  orderByNum: TOrder | null;
};

const initialState: TOrderBurger = {
  isLoadingRequest: false,
  orderRequest: false,
  order: null,
  error: null,
  orderByNum: null
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setIsLoadingRequest: (state, action: PayloadAction<boolean>) => {
      state.isLoadingRequest = action.payload;
    },
    setOrderRequest: (state, action: PayloadAction<boolean>) => {
      state.orderRequest = action.payload;
    },
    setOrder: (state, action: PayloadAction<TOrder>) => {
      state.order = action.payload;
    },
    closeModalRequest: (state) => {
      (state.order = null), (state.orderRequest = false);
    }
  },
  selectors: {
    getIsLoadingRequest: (state) => state.isLoadingRequest,
    getOrderRequest: (state) => state.orderRequest,
    getOrder: (state) => state.order,
    getOrderNum: (state) => state.orderByNum
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrderBurger.pending, (state) => {
      state.isLoadingRequest = true;
      state.error = null;
      state.orderRequest = true;
    });
    builder.addCase(fetchOrderBurger.fulfilled, (state, action) => {
      state.isLoadingRequest = false;
      state.orderRequest = false;
      state.order = action.payload.order;
    });
    builder.addCase(fetchOrderBurger.rejected, (state, action) => {
      state.orderRequest = false;
      state.isLoadingRequest = false;
      state.error = action.error.message ?? null;
    });
    builder.addCase(fetchOrderNumber.fulfilled, (state, action) => {
      state.orderByNum = action.payload.orders[0];
    });
  }
});

export default orderSlice.reducer;

export const { setOrderRequest, setOrder, closeModalRequest } =
  orderSlice.actions;

export const { getOrderRequest, getOrder, getIsLoadingRequest, getOrderNum } =
  orderSlice.selectors;
