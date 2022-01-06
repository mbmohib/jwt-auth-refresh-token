import { useMutation } from 'react-query';

import { useAxios, useAuth } from '../hooks';

interface loginData {
  data: {
    email: string;
    password: string;
  };
}

export const useLogin = () => {
  const axios = useAxios();
  const { setAuth } = useAuth();

  return useMutation(({ data }: loginData) => axios.post(`/login`, data), {
    onSuccess: data => {
      setAuth(data.data.data);
    },
  });
};

export const useRefreshToken = () => {
  const axios = useAxios();
  const { setAuth } = useAuth();

  return useMutation(
    ({ data }: { data: any }) => axios.post(`/refresh-token`),
    {
      onSuccess: data => {
        setAuth(data.data.data);
      },
    },
  );
};

export const useLogout = () => {
  const axios = useAxios();
  const { removeAuth } = useAuth();

  return useMutation(() => axios.post(`/logout`), {
    onSuccess: () => {
      removeAuth();
    },
  });
};
