import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay=(props)=>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="display">
            <div className="left">
                <div className="img_list">
                    <img src={product.image}/>
                    <img src={product.image}/>
                    <img src={product.image}/>
                    <img src={product.image}/>
                </div>
                <div className="display_img">
                    <img className="main_img" src={product.image}/>
                </div>
            </div>
            <div className="right">
                <h1>{product.name}</h1>
                <div className="right_start">
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_icon}/>
                    <img src={star_dull_icon}/>
                    <p>(304)</p>
                </div>
                <div className="display_prices">
                    <div className="prices_old">${product.old_price}</div>
                    <div className="prices_new">${product.new_price}</div>
                </div>
                <div className="description">
                    COOL
                </div>
                <div className="size">
                    <h1>Select size</h1>
                    <div className="select_size"> 
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button className="btn" onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="category"><span>Category: </span>Men, T-Shirt</p>
                <p className="category"><span>Tags: </span>Mordern, Latest</p>
                
            </div>
        </div>
    )
}

export default ProductDisplay;