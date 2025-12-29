import { getData } from "./api";

export const getMovies = () => {
  try {
    const res = getData("?s=batman&page=3&apikey=96759ce6");
    return res;
  } catch (error) {
    console.log(error);
  }
};
