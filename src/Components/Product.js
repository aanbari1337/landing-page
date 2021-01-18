import React from 'react';
import '../Assets/Product.css'

function Product(props) {
    return (
        <div className="col mb-4">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title text-center">{props.desc}</h5>
                </div>
            </div>
        </div>
            
    )
}

export default Product