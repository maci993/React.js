import React, { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard'

const HomePage = ({ setSelectedItems }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            fetch('https://fakestoreapi.com/products/category/jewelery')
            .then((res) => res.json())
            .then((json) => setProducts(json))
        }
        fetchProducts()
    }, [])

    return (
        <div className='flex flex-1 flex-wrap'>
            {products.map((product) => (
                <ProductCard setSelectedItems={setSelectedItems} product={product}/>
            ))}
        </div>
    )
}

export default HomePage