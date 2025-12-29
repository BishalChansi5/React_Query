import React from "react";
import { useParams } from "react-router-dom";

const Bishal = () => {
  const { bishal } = useParams();
  console.log(bishal);
  return <div>Bishal</div>;
};

export default Bishal;
