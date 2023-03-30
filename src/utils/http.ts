import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const { TIAN_API_KEY } = process.env;

const axiosInstance = axios.create({
  withCredentials: true,
  timeout: 60000,
});

const request = (url: string, options?: AxiosRequestConfig): Promise<any> => {
  const newOptions = options || {};

  return axiosInstance.request({ url: url, ...newOptions }).then(({ data }) => data);
};

export const getTian = <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
  return request(url, {
    params: { key: TIAN_API_KEY },
    method: 'GET',
    ...options,
  });
};

export const get = (url: string, options?: AxiosRequestConfig) => {
  return request(url, {
    method: 'GET',
    ...options,
  });
};

export const post = (url: string, options?: AxiosRequestConfig) => {
  return request(url, {
    method: 'POST',
    ...options,
  });
};
