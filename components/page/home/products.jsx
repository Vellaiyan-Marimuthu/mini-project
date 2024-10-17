'use client';

import { useState } from "react";

const { default: Item } = require("./product");

const Products = () => {
  const [productCount, setProductCount]= useState(1);

  return <>
    <div className="flex justify-center items-center m-10">
      <button className="bg-[black] p-3 text-white rounded-lg" onClick={() => setProductCount(productCount + 1)}>Add Product</button>  
      </div>
    <div className="flex gap-[20px] flex-wrap items-center justify-center">
      {Array.from({ length: productCount}).map((_, i) => (
        <div key={i}>
          <Item />
        </div>
      ))}
    </div>
  </>
};

export default Products;