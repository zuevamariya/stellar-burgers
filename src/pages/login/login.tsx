import { FC, SyntheticEvent, useState } from 'react';
import { LoginUI } from '@ui-pages';
import { TLoginData } from '@api';
import { fetchLogin } from './/..//../services/user/user-action';
import { useDispatch } from './/..//../services/store';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data: TLoginData = {
      email: email,
      password: password
    };
    dispatch(fetchLogin(data));
  };

  return (
    <LoginUI
      errorText=''
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
