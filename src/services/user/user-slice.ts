import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { fetchLogin, fetchRegister, logout } from './user-action';

type TRegisterLogin = {
  isAuthChecked: boolean;
  user: TUser | null;
};

const initialState: TRegisterLogin = {
  isAuthChecked: false,
  user: null
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
    getIsAuthChecked: (state) => state.isAuthChecked
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.isAuthChecked = true;
      state.user = action.payload;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isAuthChecked = true;
      state.user = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  }
});

export default sliceUser.reducer;

export const { getUser, getIsAuthChecked } = sliceUser.selectors;

export const { setUser, setIsAuthChecked } = sliceUser.actions;
