import React, { useEffect, useState } from "react";
import { getApiData } from "../services/Api";

const FetchOld = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const res = await getApiData();
      if (res.status === 200) {
        setData(res.data);
        setError(null);
      } else {
        setError("Failed to fetch data");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(error);

  if (loading) {
    return <p>Loading ....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default FetchOld;
