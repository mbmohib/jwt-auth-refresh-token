import { useQuery } from 'react-query';

import { useAxios } from '../hooks';
import { Site } from '../types';

export const useGetSite = () => {
  const axios = useAxios();

  return useQuery<Site, Error>('site', async () => {
    const { data } = await axios.get(`/protected`);

    return data;
  });
};
