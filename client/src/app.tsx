import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PreLoader } from './components';
import Routes from './routes';
import { useRefreshToken } from './services/auth.api';

export default function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getRefreshToken = useRefreshToken();

  useEffect(() => {
    getRefreshToken.mutate(
      {
        data: '',
      },
      {
        onSettled: () => {
          setLoading(false);
        },
        onError: () => {
          navigate('/login');
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PreLoader isLoading={loading}>
      <Routes />
    </PreLoader>
  );
}
