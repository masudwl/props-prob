import React, { useEffect } from 'react';
import '../Components/style.css';
const Header = (props) => {
        
   const cart = props.cart;
   
    useEffect(()=>{
        const newCart = cart.map( pd => console.log(pd) )

    },[])
//    console.log(cart[0]);

//    let price = 0; 
//    for (let i = 0; i < cart.length; i++) {
//        const newCart = cart[i];
//        price = price + newCart.title;
       
//    }
   
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>React Simple Course Assignment</h1>
                    </div>
                    <div className="col-md-6">
                        <h4>Total Course: <span></span></h4>
                        <h4>Total Amount : <span>200</span></h4>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;