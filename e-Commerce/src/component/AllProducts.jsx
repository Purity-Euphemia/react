import React from "react";
import { useGetAllProductsQuery } from "../api/productApi";
const AllProducts = () => {
    const products = useGetAllProductsQuery();
    // console.log(products.data);
  return (
    <div>
        {
            products?.data?.map((product)=> (
                <div key={product.id}>
                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <h4>{product.price}</h4>
                    <p>{product.description}</p>
                </div>
            ))
        }
    </div>
  )
}
export default AllProducts;




