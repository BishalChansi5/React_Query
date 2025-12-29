import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  deleteItem,
  getApiData,
  getApiDataRQ,
  getSingleData,
  updateItem,
} from "../services/Api";
import { NavLink } from "react-router-dom";

const Fetch_React_Query = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const queryClient = useQueryClient();
  const fetchData = async ({ queryKey }) => {
    const [, page] = queryKey;
    const res = await getApiDataRQ(page);
    return res.data;
  };

  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["post", pageNumber],
    queryFn: fetchData,
    keepPreviousData: true,
  });
  const deleteMutate = useMutation({
    mutationFn: (id) => deleteItem(id),
    onSuccess: (res, deleteId) => {
      queryClient.setQueryData(["post", pageNumber], (data) => {
        return data.filter((item) => item.id !== deleteId);
      });
    },
  });
  const updateMutate = useMutation({
    mutationFn: (id) => updateItem(id),
    onSuccess: (res, updateId) => {
      queryClient.setQueryData(["post", pageNumber], (items) => {
        return items?.map((item) =>
          item.id === updateId ? { ...item, title: res.data.title } : item
        );
      }) || [];
    },
  });
  if (isLoading && !data) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  // console.log(isFetching);
  return (
    <div>
      <ul>
        {data?.map((item) => (
          <li key={item.id} className="border my-4 p-4 rounded">
            <NavLink to={`${item.id}`}>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </NavLink>
            <button onClick={() => deleteMutate.mutate(item.id)}>Delete</button>
            <button onClick={() => updateMutate.mutate(item.id)}>Update</button>
          </li>
        ))}
      </ul>

      {isFetching && <p className="text-sm">Fetching new page...</p>}

      <div className="flex gap-4 items-center">
        <button
          disabled={pageNumber === 0}
          className={`p-2 rounded text-white ${
            pageNumber === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-400"
          }`}
          onClick={() => setPageNumber((prev) => prev - 1)}
        >
          Prev
        </button>

        <p>{pageNumber + 1}</p>

        <button
          className="bg-green-400 p-2 rounded text-white"
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Fetch_React_Query;
