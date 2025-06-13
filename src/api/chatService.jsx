import axios from 'axios';

export const getChats = async (page) => {
  try {
    const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chats:', error);
    return { chats: [] };
  }
};