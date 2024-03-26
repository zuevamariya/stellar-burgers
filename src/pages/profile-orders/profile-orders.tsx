import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from './/..//../services/store';
import { getUserOrders } from './/..//../services/user/user-slice';
import { fetchProfileOrders } from './/..//../services/user/user-action';

export const ProfileOrders: FC = () => {
  const orders: TOrder[] = useSelector(getUserOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileOrders());
  }, []);

  return <ProfileOrdersUI orders={orders} />;
};
