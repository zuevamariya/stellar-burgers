import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from './/..//../services/store';
import { getUserName } from './/..//../services/user/user-slice';

export const AppHeader: FC = () => {
  const userName = useSelector(getUserName);
  return <AppHeaderUI userName={userName} />;
};
