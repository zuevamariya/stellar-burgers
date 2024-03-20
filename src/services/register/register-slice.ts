import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { fetchRegister } from './register-action';

type TRegister = {
  isChecked: boolean;
  refreshToken: string;
  accessToken: string;
  user: TUser;
};

const initialState: TRegister = {
  isChecked: false,
  refreshToken: '',
  accessToken: '',
  user: {
    email: '',
    name: ''
  }
};

const sliceRegister = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    }
  },
  selectors: {
    getRefreshToken: (state) => state.refreshToken,
    getAccessToken: (state) => state.accessToken,
    getUser: (state) => state.user
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.isChecked = true;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.isChecked = false;
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
  }
});

export default sliceRegister.reducer;

export const { getRefreshToken, getAccessToken, getUser } =
  sliceRegister.selectors;

export const { setRefreshToken, setAccessToken, setUser } =
  sliceRegister.actions;
