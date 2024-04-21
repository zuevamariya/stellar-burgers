import { FC, useEffect } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import {
  getIngredientData,
  getIngredients,
  setIngredientId
} from './/..//../services/ingredients/ingredients-slice';
import { useDispatch, useSelector } from './/..//../services/store';
import { useParams } from 'react-router-dom';

export const IngredientDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const ingredients = useSelector(getIngredients);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setIngredientId(id));
    }
  }, [id, ingredients]);

  const ingredientData = useSelector(getIngredientData);

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
