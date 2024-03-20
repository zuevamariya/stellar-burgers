import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsReduser from './ingredients/ingredients-slice';
import feedsReducer from './feed/feed-slice';
import burgerConstructorReducer from './burger-constructor/burger-constructor-slice';
import registerReducer from './register/register-slice';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

const rootReducer = combineReducers({
  ingredients: ingredientsReduser,
  feeds: feedsReducer,
  burgerConstructor: burgerConstructorReducer,
  register: registerReducer
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
