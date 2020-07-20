import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

const API_URL = process.env.API_URL || 'https://jsonplaceholder.typicode.com';

let axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 8000,
});

export const apiCall = async ({
  method,
  data = {},
  url,
  headers = {},
  timeout = 8000,
}) => {
  try {
    return await axiosInstance({
      method,
      data,
      url,
      headers,
      timeout,
    });
  } catch (err) {
    console.log(`Error in API call ${method?.toUpperCase()} ${url} >>> `, err);
    return null;
  }
};
