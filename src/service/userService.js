import { api } from "./httpService";

const getUser = async (email) => {
  try {
    const response = await api.get(`/profile/${email}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const saveUser = async (user) => {
  try {
    const response = await api.post(`/users`, user);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUsers = async () => {
  try {
    const response = await api.get(`/users`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const updateUserRoles = async (users) => {
  try {
    const response = await api.put(`/users/:id`, users);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const userService = {
  getUser,
  saveUser,
  getUsers,
  updateUserRoles,
};

export default userService;
