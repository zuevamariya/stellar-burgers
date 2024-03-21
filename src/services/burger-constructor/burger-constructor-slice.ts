import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { produce } from 'immer';

type TBurgerConstructor = {
  bun: TIngredient;
  ingredients: TIngredient[];
};

const initialState: TBurgerConstructor = {
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
    getBunPrice: (state) => state.bun.price,
    getIngredientsId: (state) =>
      state.ingredients.map((ingredient) => ingredient._id)
  }
});

export default sliceBurgerConstructor.reducer;

export const {
  getBun,
  getIngredients,
  getBunId,
  getBunPrice,
  getIngredientsId
} = sliceBurgerConstructor.selectors;

export const { addIngredient } = sliceBurgerConstructor.actions;
