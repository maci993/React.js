import React from "react";
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Header = () => {
    const products = useSelector((state) => state.basket.items)
    console.log(products)
    return (
        <header className='bg-stone-300 h-20'>
            <div className='flex items-center justify-between'>
                <div className='p-4 flex items-center space-x-4'>
                    <img className='h-10 rounded-full hover:bg-stone-600'src={logo} alt="jewelery-logo" />
                </div>
                <div className='flex-1'>
                    <input className='w-80 h-10 ml-20 border border-gray-500 rounded-md text-black' type="text" placeholder="Search" />
                </div>
                <div className='flex items-center space-x-6 pr-10'>
                    <p className='italic hover:not-italic'>New</p>
                    <p className='italic hover:not-italic'>Charms & Bracelets</p>
                    <p className='italic hover:not-italic'>Rings</p>
                    <p className='italic hover:not-italic'>Necklaces</p>
                    <p className='italic hover:not-italic'>Earrings</p>
                    <p className='italic hover:not-italic'>Gifts</p>
                    <p className='italic hover:not-italic'>Collections</p>
                    <Link to={'/cart'} className='active:bg-stone-200 mr-20 rounded-lg italic hover:not-italic'>
                    Cart {products.length}</Link>
                    <p className='active:bg-stone-200 rounded-lg italic hover:not-italic'>Contact</p>
                </div>
            </div>
        </header>
    )
}

export default Header