import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://sacremap20240105142608.azurewebsites.net',
});

const token = localStorage.getItem('token');
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      try {
        const response = await axiosInstance.post('/refresh', { refreshToken });

        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;

        return axiosInstance(originalRequest);
      } catch (error) {
        console.log('Unable to refresh token', error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
