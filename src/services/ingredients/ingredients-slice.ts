import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from './ingredients-action';
import { TIngredient } from '@utils-types';

type TIngredients = {
  isIngredientsLoading: boolean;
  ingredients: TIngredient[];
  ingredientId: TIngredient | null;
};

const initialState: TIngredients = {
  isIngredientsLoading: false,
  ingredients: [],
  ingredientId: null
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
    },
    setIngredientId: (state, action: PayloadAction<string>) => {
      state.ingredientId =
        state.ingredients.find(
          (ingredient) => ingredient._id === action.payload
        ) || null;
    }
  },
  selectors: {
    getIngredientsLoading: (state) => state.isIngredientsLoading,
    getIngredients: (state) => state.ingredients,
    getIngredientsBuns: (state) =>
      state.ingredients.filter((ingredient) => ingredient.type === 'bun'),
    getIngredientsMains: (state) =>
      state.ingredients.filter((ingredient) => ingredient.type === 'main'),
    getIngredientsSauces: (state) =>
      state.ingredients.filter((ingredient) => ingredient.type === 'sauce'),
    getingredientData: (state) => state.ingredientId
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.pending, (state) => {
      state.isIngredientsLoading = true;
    });
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.isIngredientsLoading = false;
      state.ingredients = action.payload;
    });
  }
});

export const { setIsIngredientsLoading, setIngredients, setIngredientId } =
  ingredientSlice.actions;

export default ingredientSlice.reducer;

export const {
  getIngredientsLoading,
  getIngredients,
  getIngredientsBuns,
  getIngredientsMains,
  getIngredientsSauces,
  getingredientData
} = ingredientSlice.selectors;
