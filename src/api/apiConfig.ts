import axios, { AxiosResponse } from 'axios';
import qs from 'qs';

import { API_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  }
);

export const put = async <T>(
  url: string,
  body: unknown
): Promise<AxiosResponse<T>> => {
  return await axiosInstance.put(url, body);
};

export const post = async <T>(
  url: string,
  body: unknown
): Promise<AxiosResponse<T>> => {
  return await axiosInstance.post(url, body);
};

export const get = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return await axiosInstance.get(url);
};

export const patch = async <T>(
  url: string,
  body: unknown
): Promise<AxiosResponse<T>> => {
  return await axiosInstance.patch(url, body);
};

export const deleteMethod = async <T>(
  url: string
): Promise<AxiosResponse<T>> => {
  return await axiosInstance.delete(url);
};

export const queryStringify = (queryObject: object, encode = false) => {
  return qs.stringify(queryObject, { encode: encode, arrayFormat: 'brackets' });
};
