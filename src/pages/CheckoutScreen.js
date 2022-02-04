import React from "react";
import styled from "styled-components";
import CheckoutPrice from "../components/CheckoutPrice";
import CheckoutProducts from "../components/CheckoutProducts";
import Header from "../components/Header";

function CheckoutScreen() {
  return (
    <CheckoutScreenCom>
      <Header />
      <div className="checkout">
        <CheckoutProducts checkoutImage="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg" />
        <CheckoutPrice />
      </div>
    </CheckoutScreenCom>
  );
}

export default CheckoutScreen;

const CheckoutScreenCom = styled.div`
  .checkout {
    display: flex;
  }
`;
