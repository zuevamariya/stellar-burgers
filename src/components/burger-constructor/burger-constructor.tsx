import { FC, useMemo, useState } from 'react';
import { TIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector, useDispatch } from './/..//../services/store';
import {
  clearIngredients,
  getBun,
  getBunId,
  getIngredients
} from './/..//../services/burger-constructor/burger-constructor-slice';
import {
  closeModalRequest,
  getIsLoadingRequest,
  getOrder,
  getOrderRequest
} from './/..//../services/order/order-slice';
import { getUser } from './/..//../services/user/user-slice';
import { useNavigate } from 'react-router-dom';
import { fetchOrderBurger } from './/..//../services/order/order-action';
import { fetchFeeds } from './/..//../services/feed/feed-action';

export const BurgerConstructor: FC = () => {
  const constructorItems = {
    bun: useSelector(getBun),
    ingredients: useSelector(getIngredients)
  };

  const orderRequest = useSelector(getOrderRequest);
  const orderModalData = useSelector(getOrder);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(getUser);
  const bunId = useSelector(getBunId);
  const ingredientsId = constructorItems.ingredients.map(
    (ingredient) => ingredient._id
  );
  const isLoadingRequest = useSelector(getIsLoadingRequest);

  const onOrderClick = () => {
    if (bunId && ingredientsId.length >= 1) {
      const orderId = [bunId].concat(ingredientsId, [bunId]);
      if (user && !isLoadingRequest) {
        dispatch(fetchOrderBurger(orderId));
        dispatch(fetchFeeds());
      } else {
        navigate('/login');
      }
    }
  };

  const closeOrderModal = () => {
    dispatch(closeModalRequest());
    dispatch(clearIngredients());
  };

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
