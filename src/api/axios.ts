import axios from 'axios';
import { SignInRoute } from '../router/routes';

const instance = axios.create({
  baseURL: 'https://food-calories-app.herokuapp.com/api'
});

instance.interceptors.request.use(req => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers = {
      Authorization: `Bearer ${token}`
    };
  }
  return req;
});
instance.interceptors.response.use(
  res => res,
  error => {
    if (error.response.data.statusCode === 401) {
      localStorage.removeItem('token');
      window.location.href = SignInRoute;
    }
    return Promise.reject(error);
  }
);
export default { instance };
