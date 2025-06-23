import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const shortenUrl = async (urlData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/shorten`, urlData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Error shortening URL' };
  }
};

export const getShortenedUrls = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/urls`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Error fetching URLs' };
  }
};

export const getUrlAnalytics = async (shortCode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/analytics/${shortCode}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Error fetching analytics' };
  }
};

export const deleteUrl = async (shortCode) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/urls/${shortCode}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Error deleting URL' };
  }
};

export const createUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Error creating user' };
  }
};

export const redirectToOriginalUrl = async (shortCode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/redirect/${shortCode}`);
    window.location.href = response.data.originalUrl;
  } catch (error) {
    throw error.response ? error.response.data : { message: 'Redirect error' };
  }
};
