import axios, { type AxiosInstance } from 'axios';

const requiredEnv = (value: string | undefined, name: string): string => {
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
};

let apiClient: AxiosInstance | null = null;

export const getApiClient = () => {
  if (apiClient) return apiClient;

  apiClient = axios.create({
    baseURL: requiredEnv(import.meta.env.VITE_API_URL, 'VITE_API_URL'),
    timeout: 5000,
  });

  apiClient.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  });

  return apiClient;
};
