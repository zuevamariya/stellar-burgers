import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from './ingredients-action';
import { TIngredient } from '@utils-types';

type TIngredients = {
  isIngredientsLoading: boolean;
  ingredients: TIngredient[];
  ingredientId: TIngredient | null;
  orderIngredientsById: TIngredient[];
};

const initialState: TIngredients = {
  isIngredientsLoading: false,
  ingredients: [],
  ingredientId: null,
  orderIngredientsById: []
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
      state.ingredients.forEach((ingredient) => {
        if (ingredient._id === action.payload) {
          state.ingredientId = ingredient;
        }
      });
    }
  },
  selectors: {
    getIngredientsLoading: (state) => state.isIngredientsLoading,
    getIngredients: (state) => state.ingredients,
    getIngredientData: (state) => state.ingredientId,
    getOrderIngredientsById: (state) => state.orderIngredientsById
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
  getIngredientData,
  getOrderIngredientsById
} = ingredientSlice.selectors;
