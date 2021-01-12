import axios from 'axios';

/**
 * This file has the axios configuration for the requests, including the definition of the API base url
 * to be used in the API requests, which is defined in the .env file.
 */

const Config = {
  baseURL: `${process.env.REACT_APP_GITHUB_API_URL}`,
  headers: {
    Accept: 'application/json',
  },
};

const instance = axios.create(Config);

instance.interceptors.response.use(
  ({ data }) => data,
);

export default instance;
