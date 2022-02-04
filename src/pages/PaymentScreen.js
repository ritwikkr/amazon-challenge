import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { selectBasket } from "../store/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { Link } from "react-router-dom";

function PaymentScreen() {
  const name = useSelector(selectUser);
  const basket = useSelector(selectBasket);
  return (
    <PaymentScreenCom>
      <Header />
      <div className="checkout">
        <h1>Checkout({basket?.length} items)</h1>
      </div>
      <div className="card">
        <div className="delivery-address">
          <p>Delivery Address</p>
          <div className="address">
            <p>{name}</p>
            <p>123 React Latte</p>
            <p>LA, California</p>
          </div>
        </div>
        <hr />
        <div className="review-items">
          <p>
            Review Items and <br /> delivery
          </p>
          {basket.length === 0 ? (
            <div className="cart">
              <h1>No items in the Cart</h1>
              <Link to="/">
                <div className="cart-btn">
                  <button>Continue Shopping</button>
                </div>
              </Link>
            </div>
          ) : (
            <div className="product-list">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  productImage={item.img}
                  description={item.description}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        {/* <hr /> */}
        {/* <div className="payment">
          <p>Payment Method</p>
          <div className="card-details">
            <p>Card Details</p>
            <div className="card-number">
              <p>Card number</p>
              <p>Date</p>
            </div>
            <div className="order-total">
              <p>Order Total: $123</p>
              <button>Buy Now</button>
            </div>
          </div>
        </div> */}
      </div>
    </PaymentScreenCom>
  );
}

export default PaymentScreen;

const PaymentScreenCom = styled.div`
  .checkout {
    background-color: lightgray;
    padding: 80px 0 10px 0;
    text-align: center;
  }
  .card {
    border: 1px solid black;
    padding: 10px;
    .delivery-address {
      display: flex;
      margin: 10px;
      > p {
        font-weight: 600;
      }
      .address {
        margin: 0 0 0 30px;
      }
    }
    .review-items {
      margin: 10px;
      display: flex;
      > p {
        font-weight: 600;
      }
      .cart {
        margin: 0 0 0 20px;
        .cart-btn > button {
          background-color: #ff9900;
          border: none;
          border-radius: 25px;
          width: 200px;
          height: 30px;
          cursor: pointer;
        }
      }
    }
  }
`;
