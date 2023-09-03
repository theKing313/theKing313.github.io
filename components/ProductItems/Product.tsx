"use client";
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { addToCart, getAllProducts } from '@/lib/redux/slices/productSlice/productSlice'
import {
    useSelector,
    useDispatch,
} from '@/lib/redux/store'
export default function Product() {
    let products = JSON.parse(localStorage.getItem('product')!)
    const status: any = useSelector((state) => state.productSlice.status)
    return (
        <section className=''>
            <div className="container">
                <div className="pl-5 pb-4">PRODUCTS</div>
                <div className="relative">
                    <div className="flex space-x-4 pb-4">
                        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                            <div className="flex flex-col md:grid md:grid-cols-3" >
                                {status !== 'loading' && products?.carts[0].products.map((product: any) => {
                                    return <ProductItem {...product!} key={product.id} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
