import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { fetchOrderBurger } from './order-action';

type TOrderBurger = {
  isLoadingRequest: boolean;
  orderRequest: boolean;
  order: TOrder | null;
  name: string;
  error: string | null;
};

const initialState: TOrderBurger = {
  isLoadingRequest: false,
  orderRequest: false,
  order: null,
  name: '',
  error: null
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
    setOrderName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    closeModalRequest: (state) => {
      (state.order = null), (state.orderRequest = false);
    }
  },
  selectors: {
    getIsLoadingRequest: (state) => state.isLoadingRequest,
    getOrderRequest: (state) => state.orderRequest,
    getOrder: (state) => state.order,
    getOrderName: (state) => state.name
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
      state.name = action.payload.name;
    });
    builder.addCase(fetchOrderBurger.rejected, (state, action) => {
      state.orderRequest = false;
      state.isLoadingRequest = false;
      state.error = action.error.message ?? null;
    });
  }
});

export default orderSlice.reducer;

export const { setOrderRequest, setOrder, setOrderName, closeModalRequest } =
  orderSlice.actions;

export const { getOrderRequest, getOrder, getOrderName, getIsLoadingRequest } =
  orderSlice.selectors;
