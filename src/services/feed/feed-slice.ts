import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { fetchFeeds } from './feed-action';

interface IInitialState {
  isIngredientsLoading: boolean;
  orders: TOrder[];
  total: number;
  totalToday: number;
}

const initialState: IInitialState = {
  isIngredientsLoading: false,
  orders: [],
  total: 0,
  totalToday: 0
};

export const feedSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isIngredientsLoading = action.payload;
    },
    setFeeds: (state, action: PayloadAction<TOrder[]>) => {
      state.orders = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setTotalToday: (state, action: PayloadAction<number>) => {
      state.totalToday = action.payload;
    }
  },
  selectors: {
    getFeeds: (state) => state.orders,
    getTotal: (state) => state.total,
    getTotalToday: (state) => state.totalToday,
    getTotalFeeds: (state) => ({
      total: state.total,
      totalToday: state.totalToday
    })
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeeds.pending, (state) => {
      state.isIngredientsLoading = true;
    });
    builder.addCase(fetchFeeds.fulfilled, (state, action) => {
      state.isIngredientsLoading = false;
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    });
  }
});

export const { setIsLoading, setFeeds, setTotal, setTotalToday } =
  feedSlice.actions;
export default feedSlice.reducer;
export const { getFeeds, getTotal, getTotalToday, getTotalFeeds } =
  feedSlice.selectors;
