import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export const getApiData = () => {
  return api.get(`/posts`);
};
export const getApiDataRQ = (pageNumber) => {
  return api.get(`/posts?_start=${pageNumber * 3}&_limit=3`);
};

export const getSingleData = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    if (res.status === 200) {
      // console.log(res.data);
      return res.data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const deleteItem = (id) => {
  return api.delete(`/posts/${id}`);
};
export const updateItem = (id) => {
  return api.put(`/posts/${id}`, { title: "I have updated" });
};
