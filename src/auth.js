import axiosInstance from './axios';

const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    if (response.data.accessToken && response.data.refreshToken) {
      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  delete axiosInstance.defaults.headers.common['Authorization'];
};

export default {
  login,
  logout,
};
