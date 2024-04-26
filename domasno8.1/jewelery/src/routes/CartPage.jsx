import React from "react";
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const CartPage = () => {
    const products = useSelector((state) => state.basket.items)

    return (
        <div>
            {/* {products.length} */}
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    )
}

export default CartPage