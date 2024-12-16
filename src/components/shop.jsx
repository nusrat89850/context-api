import React, { useState } from 'react'
import SingleProduct from './SingleProduct'
import { faker } from '@faker-js/faker';

export default function Shop() {
    const productArray = [...Array(6)].map(() => ({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.url(),
    }));
    const [product] = useState(productArray);
    console.log(productArray);
   // const [cart,setCart] = useState([]);
    console.log(cart);
  return (
    <>
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1100px] px-5'>
      {product.map((product) => (
        <SingleProduct product={product} 
        //cart={cart} setCart={setCart} 
        />
       ))}
    </div>
    </>
  )
}
