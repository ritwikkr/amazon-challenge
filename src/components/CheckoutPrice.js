import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectBasket } from "../store/basketSlice";
import { useNavigate } from "react-router-dom";

function CheckoutPrice() {
  const cart = useSelector(selectBasket);
  const navigation = useNavigate();
  const amt = cart.reduce((acc, ele) => {
    return (acc = acc + ele.price);
  }, 0);
  const amount = Math.round(amt * 100) / 100; // Round to 2 decimal places
  return (
    <CheckoutPriceCom>
      <div className="subtotal">
        <p>
          Subtotal ({cart.length} items): <strong>${amount}</strong>
        </p>
        <div className="checkbox">
          <input type="checkbox" id="chkbox" />
          <label htmlFor="chkbox">This order contains a gift</label>
        </div>
        <div className="order-btn">
          <button onClick={() => navigation("/checkout/payment")}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </CheckoutPriceCom>
  );
}

export default CheckoutPrice;

const CheckoutPriceCom = styled.div`
  padding: 100px 0 0 0;
  width: 30%;
  .subtotal {
    background-color: lightgray;
    height: 150px;
    width: 95%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .checkbox {
      display: flex;
      align-items: center;
      > input {
        margin-right: 10px;
      }
    }
    .order-btn {
      > button {
        padding: 5px;
        background-color: #ff9900;
        border: none;
        width: 100%;
        cursor: pointer;
      }
    }
  }
`;
