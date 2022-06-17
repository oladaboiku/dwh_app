import React from "react";
import "./products.css";
import BlackPrinceblueaqua from "../pics/BlackPrinceblueaqua.jpg";

function Products() {
  return (
    <div className="product">
      <div className="productCon">
        <div className="product_title">
          <h1>our products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            consequuntur iste. Sapiente rem beatae, voluptates quisquam ipsam
            sit reprehenderit iusto, optio ea odio pariatur sunt?
          </p>
        </div>
        <div className="productCardList">
          <div className="product_card">
            <div className="productImg">
              <img src={BlackPrinceblueaqua} alt="Black-Prince-blue-aqua" />
            </div>
            <div className="product_details">
              <p className="productName">ankara 102</p>
              <span>&#8358;5000.00</span>
              <button className="btn_card">add to cart</button>
            </div>
          </div>
          <div className="product_card">
            <div className="productImg">
              <img src={BlackPrinceblueaqua} alt="Black-Prince-blue-aqua" />
            </div>
            <div className="product_details">
              <p className="productName">ankara 102</p>
              <span>&#8358;5000.00</span>
              <button className="btn_card">add to cart</button>
            </div>
          </div>
          <div className="product_card">
            <div className="productImg">
              <img src={BlackPrinceblueaqua} alt="Black-Prince-blue-aqua" />
            </div>
            <div className="product_details">
              <p className="productName">ankara 102</p>
              <span>&#8358;5000.00</span>
              <button className="btn_card">add to cart</button>
            </div>
          </div>
          <div className="product_card">
            <div className="productImg">
              <img src={BlackPrinceblueaqua} alt="Black-Prince-blue-aqua" />
            </div>
            <div className="product_details">
              <p className="productName">ankara 102</p>
              <span>&#8358;5000.00</span>
              <button className="btn_card">add to cart</button>
            </div>
          </div>
        </div>
      </div>
      Products
    </div>
  );
}

export default Products;
