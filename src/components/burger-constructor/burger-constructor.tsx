import { FC, useMemo } from 'react';
import { TIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector, useDispatch } from './/..//../services/store';
import {
  getBun,
  getBunId,
  getIngredients,
  getIngredientsId
} from './/..//../services/burger-constructor/burger-constructor-slice';
import {
  getOrder,
  getOrderRequest
} from './/..//../services/order/order-slice';
import { getUser } from './/..//../services/user/user-slice';
import { useNavigate } from 'react-router-dom';
import { fetchOrderBurger } from './/..//../services/order/order-action';

export const BurgerConstructor: FC = () => {
  const constructorItems = {
    bun: useSelector(getBun),
    ingredients: useSelector(getIngredients)
  };

  const orderRequest = useSelector(getOrderRequest);

  const orderModalData = useSelector(getOrder);

  const navigate = useNavigate();

  const user = useSelector(getUser);
  const bunId = useSelector(getBunId);
  const ingredientsId = useSelector(getIngredientsId);
  const orderId = [bunId].concat(ingredientsId);
  const dispatch = useDispatch();

  const onOrderClick = () => {
    console.log('Clicked onOrderClick');
    if (!constructorItems.bun || orderRequest) return;
    if (!user) {
      navigate('/login');
    } else {
      dispatch(fetchOrderBurger(orderId));
    }
  };
  const closeOrderModal = () => {};

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
