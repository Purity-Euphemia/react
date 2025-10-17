import React from "react";
import { useGetAllProductsQuery } from "../api/productApi";
const AllProducts = () => {
    const data = useGetAllProductsQuery();
    console.log(data);
  return (
    <div>AllProducts</div>
  )
}
export default AllProducts;


