import axios, { Axios, AxiosError, AxiosRequestConfig } from 'axios';
import { useMemo } from 'react';
import useAuth from './use-auth';
import { apiEndpoint } from '../config';

export default function useAxios() {
  const { token, expiredIn, setAuth, removeAuth } = useAuth();

  const axiosClient: Axios = useMemo(() => {
    const axiosInstance = axios.create({
      baseURL: apiEndpoint,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    axiosInstance.interceptors.request.use(
      async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
        if (token && expiredIn && Date.now() >= expiredIn * 1000) {
          const { data, status } = await axios.post(
            '/refresh-token',
            {},
            config,
          );

          if (config.headers && status === 200) {
            setAuth(data.data);
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${data.data.token}`;
          }
        } else if (token && config.headers) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
    );

    axiosInstance.interceptors.response.use(
      undefined,
      (error: AxiosError): Promise<AxiosError> => {
        const statusCode = error.response ? error.response.status : null;

        if (statusCode === 401) {
          removeAuth();
        }

        return Promise.reject(error);
      },
    );

    return axiosInstance;

    // eslint-disable-next-line
  }, [token]);

  return axiosClient;
}
