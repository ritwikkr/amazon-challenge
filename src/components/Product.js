import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToBasket } from "../store/basketSlice";

function Product(props) {
  const dispatch = useDispatch();
  function addToBasketHandler() {
    const product = {
      id: Math.random().toString(),
      description: props.desc,
      price: props.price,
      rating: props.stars,
      img: props.img,
    };
    dispatch(addToBasket({ ...product }));
  }
  return (
    <ProductCom>
      <div className="product-description">
        <p>{props.desc}</p>
      </div>
      <div className="product-price">
        <p>${props.price}</p>
      </div>
      <div className="stars">
        {Array(props.stars)
          .fill()
          .map(() => (
            <i class="fas fa-star"></i>
          ))}
      </div>
      <div className="product-image">
        <img src={props.img} alt="" />
      </div>
      <div className="btn">
        <button onClick={addToBasketHandler}>Add to basket</button>
      </div>
    </ProductCom>
  );
}

export default Product;

const ProductCom = styled.div`
  background-color: white;
  width: 430px;
  height: 100%;
  padding: 20px;
  margin: 0 10px;
  flex: 1;
  .product-price {
    font-weight: 700;
  }
  .stars {
    > i {
      color: #ff9900;
    }
  }
  .product-image {
    width: 80%;
    margin: 10px auto;
    height: 220px;
    > img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }
  .btn {
    text-align: center;
    > button {
      margin: auto;
      background-color: #ff9900;
      border: none;
      padding: 5px;
      margin: 10px 0;
      cursor: pointer;
    }
  }
`;
