import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slice/basketSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className='relative mt-20 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 '>
      <img className='h-20 items-center content-center' src={product.image} />
      <h2 className="text-sm truncate p-6">{product.title}</h2>
      <div className="pl-40 items-center justify-center">
        <h2 className="text-sm truncate pt-4">${product.price}</h2>
        <button
          onClick={() => dispatch(addToBasket(product))}
          className=" border border-gray-300 bg-stone-300 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
