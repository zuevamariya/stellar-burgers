import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TIngredient, TOrder } from '@utils-types';
import { fetchOrderBurger, fetchOrderNumber } from './order-action';

type TOrderBurger = {
  isLoadingRequest: boolean;
  orderRequest: boolean;
  order: TOrder | null;
  name: string;
  error: string | null;
  orders: TOrder[];
  orderByNum: TOrder | null;
  orderIngredients: string[];
};

const initialState: TOrderBurger = {
  isLoadingRequest: false,
  orderRequest: false,
  order: null,
  name: '',
  error: null,
  orders: [],
  orderByNum: null,
  orderIngredients: []
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
    setOrderIngredients: (state, action: PayloadAction<string[]>) => {
      state.orderIngredients = action.payload;
    },
    closeModalRequest: (state) => {
      (state.order = null), (state.orderRequest = false);
    },
    setOrderNum: (state, action: PayloadAction<string>) => {
      state.orders.forEach((order) => {
        if (order.number === Number(action.payload)) {
          state.orderByNum = order;
        }
      });
    },
    clearOrderData: (state) => {
      state.orderByNum = null;
    }
  },
  selectors: {
    getIsLoadingRequest: (state) => state.isLoadingRequest,
    getOrderRequest: (state) => state.orderRequest,
    getOrder: (state) => state.order,
    getOrderName: (state) => state.name,
    getOrderNum: (state) => state.orderByNum,
    getOrderIngredients: (state) =>
      state.orderByNum ? state.orderByNum.ingredients : []
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
    builder.addCase(fetchOrderNumber.fulfilled, (state, action) => {
      state.orders = action.payload.orders;
    });
  }
});

export default orderSlice.reducer;

export const {
  setOrderRequest,
  setOrder,
  setOrderName,
  closeModalRequest,
  setOrderNum,
  clearOrderData
} = orderSlice.actions;

export const {
  getOrderRequest,
  getOrder,
  getOrderName,
  getIsLoadingRequest,
  getOrderNum,
  getOrderIngredients
} = orderSlice.selectors;
