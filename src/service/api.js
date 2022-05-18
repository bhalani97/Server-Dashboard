import Axios from "axios";
const defaultAxios = Axios.create({
  headers: { common: "test" },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export const getUserlimit10 = ({
  data = {},
  headers = {},
  params = {},
} = {}) => {
  return defaultAxios({
    url: "https://dummyapi.io/data/v1/user?limit=10",
    method: "get",
    params,
    headers: { "app-id": "6112dc7c3f812e0d9b6679dd", ...headers },
    data,
  });
};
export const getTodos = ({ data = {}, headers = {}, params = {} } = {}) => {
  return defaultAxios({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    method: "get",
    params,
    headers: { Authorization: "bearer", ...headers },
    data,
  });
};
export const getTodos1 = ({ data = {}, headers = {}, params = {} } = {}) => {
  return defaultAxios({
    url: "https://jsonplaceholder.typicode.com/todos",
    method: "get",
    params,
    headers,
    data,
  });
};
