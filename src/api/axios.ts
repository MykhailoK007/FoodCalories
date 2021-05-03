import axios from 'axios';

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

export default { instance };
