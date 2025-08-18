import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const addTask = async (taskData) => {
  const response = await axios.post(`${API_URL}/tasks`, taskData);
  return response.data;
};

export const updateTask = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, updatedData);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/tasks/${id}`);
};