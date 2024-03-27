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
      produce(state, (field) => {
        if (action.payload.type === 'bun') {
          field.bun = action.payload;
        } else {
          field.ingredients.push(action.payload);
        }
      }),
    removeIngredient: (state, action: PayloadAction<TIngredient>) =>
      produce(state, (field) => {
        if (action.payload.type !== 'bun') {
          const index = field.ingredients.findIndex(
            (ingredient) => ingredient._id === action.payload._id
          );
          field.ingredients.splice(index, 1);
        }
      }),
    moveUpIngredient: (state, action: PayloadAction<TIngredient>) => {
      const index = state.ingredients.findIndex(
        (ingredient) => ingredient._id === action.payload._id
      );
      if (index > 0) {
        const ingredients = [...state.ingredients];
        const pick = ingredients[index];
        ingredients[index] = ingredients[index - 1];
        ingredients[index - 1] = pick;

        return produce(state, (field) => {
          field.ingredients = ingredients;
        });
      }
    },
    moveDownIngredient: (state, action: PayloadAction<TIngredient>) => {
      const index = state.ingredients.findIndex(
        (ingredient) => ingredient._id === action.payload._id
      );
      if (index < state.ingredients.length - 1) {
        const ingredients = [...state.ingredients];
        const pick = ingredients[index];
        ingredients[index] = ingredients[index + 1];
        ingredients[index + 1] = pick;

        return produce(state, (field) => {
          field.ingredients = ingredients;
        });
      }
    },
    clearIngredients: (state) => {
      state.ingredients = initialState.ingredients;
      state.bun = initialState.bun;
    }
  },
  selectors: {
    getBun: (state) => state.bun,
    getBunId: (state) => state.bun._id,
    getBunPrice: (state) => state.bun.price,
    getIngredients: (state) => state.ingredients,
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

export const {
  addIngredient,
  removeIngredient,
  moveUpIngredient,
  moveDownIngredient,
  clearIngredients
} = sliceBurgerConstructor.actions;
