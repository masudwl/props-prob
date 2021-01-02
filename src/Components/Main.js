import React, { useState, useEffect } from 'react';
import data from '../data/data';
import Product from './Product';
import Header from './Header';

const Main = () => {
 
   const [product, setProduct] = useState(data);
   
   const [cart, setCart] = useState([]);
   
   useEffect(() => {
       
   }, [])

    const addProduct = (adPd) => {
        const newCart = ([...cart, adPd]);
        setCart(newCart);
        // console.log(newCart);
        
    }

    return (
       <main>
           <Header cart={cart}></Header>
            <div className="container">
            <div className="row">
            
                {
                product.map(pd => <Product pd={pd} addProduct={addProduct}></Product>)
                }
                
            </div>
        </div>
       </main>
    );
};

export default Main;