import React from "react";
import styled from "styled-components";
import { removeFromBasket } from "../store/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct(props) {
  console.log(props.id);
  const dispatch = useDispatch();
  function removeItemHandler() {
    dispatch(removeFromBasket({ id: props.id }));
  }
  return (
    <CheckoutProductCom>
      <div className="checkout-products">
        <div className="checkout-product-img">
          <img src={props.productImage} alt="" />
        </div>
        <div className="checkout-product-info">
          <p>{props.description}</p>
          <p>${props.price}</p>
          {Array(props.rating)
            .fill()
            .map(() => (
              <i class="fas fa-star"></i>
            ))}
          <div className="remove-btn">
            <button onClick={removeItemHandler}>Remove from basket</button>
          </div>
        </div>
      </div>
    </CheckoutProductCom>
  );
}

export default CheckoutProduct;

const CheckoutProductCom = styled.div`
  margin: 0 0 0 20px;
  .checkout-product-img {
    > img {
      width: 100px;
    }
  }
`;
