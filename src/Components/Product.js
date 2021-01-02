import React from 'react';
import '../Components/style.css';

const Product = (props) => {
    const {title, price, img, description} = props.pd; 
    return (
    <div className="col-md-3">
        <div className="card">
            <img src={img} className="card-img-top" alt=""/>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
                <div className="card-bottom">
                    <p className="text-success">Price : {price}</p>
                    <button className="btn btn-success" onClick={()=> props.addProduct(props.pd)}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Product;