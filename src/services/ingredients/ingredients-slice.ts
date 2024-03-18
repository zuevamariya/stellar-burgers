import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from './ingredients-action';
import { TIngredient } from '@utils-types';

const initialState: {
  isIngredientsLoading: boolean;
  ingredients: TIngredient[];
} = {
  isIngredientsLoading: false,
  ingredients: []
};

export const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setIsIngredientsLoading: (state, action: PayloadAction<boolean>) => {
      state.isIngredientsLoading = action.payload;
    },
    setIngredients: (state, action: PayloadAction<TIngredient[]>) => {
      state.ingredients = action.payload;
    }
  },
  selectors: {
    getIngredientsBuns: (state) =>
      state.ingredients.filter((ingredient) => ingredient.type === 'bun'),
    getIngredientsMains: (state) =>
      state.ingredients.filter((ingredient) => ingredient.type === 'main'),
    getIngredientsSauces: (state) =>
      state.ingredients.filter((ingredient) => ingredient.type === 'sauce')
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.isIngredientsLoading = true;
      state.ingredients = action.payload;
    });
  }
});

export const { setIsIngredientsLoading, setIngredients } =
  ingredientSlice.actions;

export default ingredientSlice.reducer;

export const { getIngredientsBuns, getIngredientsMains, getIngredientsSauces } =
  ingredientSlice.selectors;
