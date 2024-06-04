import axios from 'axios';

export const getAllcarPages = async (page: number) => {
  const { data } = await axios.get(`https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/pizza-buratino?page=${page}&limit=9`);
   return data;
  
};

export const getAllcar = async () => {
  const { data } = await axios.get(
    `https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/pizza-buratino`
  );

  return data;
};

export const getCarById = async (carId: number) => {
  const { data } = await axios.get(
    `https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/pizza-buratino/${carId}`
  );

  return data;
};