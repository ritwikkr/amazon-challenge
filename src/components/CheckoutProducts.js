import React from "react";
import styled from "styled-components";
import CheckoutProduct from "./CheckoutProduct";
import { useSelector } from "react-redux";
import { selectBasket } from "../store/basketSlice";
import { Link } from "react-router-dom";
import { selectUser } from "../store/userSlice";

function CheckoutProducts(props) {
  const cart = useSelector(selectBasket);
  const user = useSelector(selectUser);
  return (
    <CheckoutProductsCom>
      <div className="container">
        <div className="checkout-image">
          <img src={props.checkoutImage} alt="" />
        </div>
        <div className="basket">
          <h4>Hello, {user}</h4>
          <h2>Your Shopping Basket</h2>
          <hr />
          {cart.length === 0 ? (
            <>
              <h1>No items in the Basket</h1>
              <Link to="/">
                <button>Continue Shopping</button>
              </Link>
            </>
          ) : (
            cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                productImage={item.img}
                description={item.description}
                price={item.price}
                rating={item.rating}
              />
            ))
          )}
        </div>
      </div>
    </CheckoutProductsCom>
  );
}

export default CheckoutProducts;

const CheckoutProductsCom = styled.div`
  padding: 100px 30px 0;
  width: 70%;
  .container {
    .checkout-image {
      height: 150px;
      width: 100%;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .basket {
      .checkout-products {
        display: flex;
        .checkout-product-img {
          width: 150px;
          height: 200px;
          margin-right: 30px;
          > img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
`;
