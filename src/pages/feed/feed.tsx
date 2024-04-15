import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from './../../services/store';
import { getFeeds } from './../../services/feed/feed-slice';
import { fetchFeeds } from './../../services/feed/feed-action';

export const Feed: FC = () => {
  const orders = useSelector(getFeeds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeeds());
  }, []);

  if (!orders.length) {
    return <Preloader />;
  }
  return (
    <FeedUI
      orders={orders}
      handleGetFeeds={() => {
        dispatch(fetchFeeds());
      }}
    />
  );
};
