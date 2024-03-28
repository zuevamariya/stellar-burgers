import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TOrder, TUser } from '@utils-types';
import {
  fetchLogin,
  fetchProfileOrders,
  fetchRegister,
  logout
} from './user-action';

type TRegisterLogin = {
  isAuthChecked: boolean;
  user: TUser | null;
  error: string | null;
  userOrders: TOrder[];
};

const initialState: TRegisterLogin = {
  isAuthChecked: false,
  user: null,
  error: null,
  userOrders: []
};

const sliceUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    setIsAuthChecked: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecked = action.payload;
    }
  },
  selectors: {
    getUser: (state) => state.user,
    getUserEmail: (state) => state.user?.email,
    getUserName: (state) => state.user?.name,
    getIsAuthChecked: (state) => state.isAuthChecked,
    getUserOrders: (state) => state.userOrders
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthChecked = true;
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.isAuthChecked = true;
      state.error = action.error.message ?? null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isAuthChecked = true;
      state.user = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isAuthChecked = true;
      state.error = action.error.message ?? null;
    });
    builder.addCase(fetchProfileOrders.fulfilled, (state, action) => {
      state.userOrders = action.payload;
    });
    builder.addCase(fetchProfileOrders.rejected, (state, action) => {
      state.error = action.error.message ?? null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  }
});

export default sliceUser.reducer;

export const {
  getIsAuthChecked,
  getUser,
  getUserEmail,
  getUserOrders,
  getUserName
} = sliceUser.selectors;

export const { setUser, setIsAuthChecked } = sliceUser.actions;
