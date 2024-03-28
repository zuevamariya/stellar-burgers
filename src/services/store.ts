import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsReduser from './ingredients/ingredients-slice';
import feedsReducer from './feed/feed-slice';
import burgerConstructorReducer from './burger-constructor/burger-constructor-slice';
import userReducer from './user/user-slice';
import orderReducer from './order/order-slice';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

const rootReducer = combineReducers({
  ingredients: ingredientsReduser,
  feeds: feedsReducer,
  burgerConstructor: burgerConstructorReducer,
  user: userReducer,
  order: orderReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
