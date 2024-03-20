import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { produce } from 'immer';

interface IBurgerConstructor {
  bun: TIngredient;
  ingredients: TIngredient[];
}

const initialState: IBurgerConstructor = {
  bun: {
    _id: '',
    name: '',
    type: '',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: '',
    image_large: '',
    image_mobile: ''
  },
  ingredients: []
};

const sliceBurgerConstructor = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<TIngredient>) =>
      produce(state, (draft) => {
        if (action.payload.type === 'bun') {
          draft.bun = action.payload;
        } else {
          draft.ingredients.push(action.payload);
        }
      })
  },
  selectors: {
    getBun: (state) => state.bun,
    getIngredients: (state) => state.ingredients,
    getBunId: (state) => state.bun._id,
    getBunPrice: (state) => state.bun.price
  }
});

export default sliceBurgerConstructor.reducer;

export const { getBun, getIngredients, getBunId, getBunPrice } =
  sliceBurgerConstructor.selectors;

export const { addIngredient } = sliceBurgerConstructor.actions;
