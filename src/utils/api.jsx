import axios from "axios";
const api = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const getData = async (url) => {
  const res = await api.get(`${url}`);
  console.log(res);
  return res.data;
};

export const fetchUsingUseQuery = async () => {
  const res = await api.get("?s=hero&page=3&apikey=96759ce6");
  return res.data.Search;
};

export const fetchUsingUseSuspenseQuery = async () => {
  const res = await api.get("?s=superman&page=3&apikey=96759ce6");
  return res.data.Search;
};

export const fetchUsingUseSuspenseQueryInLoader = async () => {
  const res = await api.get("?s=power&page=3&apikey=96759ce6");
  return res.data.Search;
};
