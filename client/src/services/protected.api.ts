import { useQuery } from 'react-query';

import { useAxios } from '../hooks';

export const useProtectedApi = () => {
  const axios = useAxios();

  return useQuery<any, Error>('protected', async () => {
    const { data } = await axios.get(`/protected`);

    return data;
  });
};
