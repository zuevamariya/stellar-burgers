import { FC, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { forgotPasswordApi } from '@api';
import { ForgotPasswordUI } from '@ui-pages';
import { useSelector } from './/..//../services/store';
import { getUserEmail } from './/..//../services/user/user-slice';

export const ForgotPassword: FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<Error | null>(null);

  const navigate = useNavigate();
  const userEmail = useSelector(getUserEmail);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setError(null);
    if (email && email === userEmail) {
      forgotPasswordApi({ email })
        .then(() => {
          localStorage.setItem('resetPassword', 'true');
          navigate('/reset-password', { replace: true });
        })
        .catch((err) => setError(err));
    }
  };

  return (
    <ForgotPasswordUI
      errorText={error?.message}
      email={email}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
    />
  );
};
