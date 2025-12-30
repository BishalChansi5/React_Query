import React from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../services/Api";
import { useQuery } from "@tanstack/react-query";

const SinglePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["item", id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return getSingleData(id);
    },
  });
  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div>
      <div className="border my-4 p-4 rounded">
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default SinglePage;
