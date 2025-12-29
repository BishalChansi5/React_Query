import axios from "axios";
const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const getData = async (url) => {
  const res = await api.get(`${url}`);
  console.log(res);
  return res.data;
};
