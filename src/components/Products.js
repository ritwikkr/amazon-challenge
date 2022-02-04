import React from "react";
import styled from "styled-components";
import Product from "./Product";

function Products() {
  return (
    <ProductsCom>
      <div className="container">
        <Product
          key={Math.random().toString()}
          desc="The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback"
          price={11.95}
          stars={5}
          img="https://images-eu.ssl-images-amazon.com/images/I/51SvbuqepjS._AC_SX368_.jpg"
        />
        <Product
          key={Math.random().toString()}
          desc="The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback"
          price={21.95}
          stars={4}
          img="https://images-eu.ssl-images-amazon.com/images/I/31czYq1WYeL._AC_SX368_.jpg"
        />
      </div>
      <div className="container">
        <Product
          key={Math.random().toString()}
          desc="The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback"
          price={31.95}
          stars={3}
          img="https://m.media-amazon.com/images/I/71APvZAt6DL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          key={Math.random().toString()}
          desc="The Lean Startup: How Constant Innovation Creates Radically Successful
        Businesses Paperback"
          price={41.95}
          stars={2}
          img="https://m.media-amazon.com/images/I/914o5xV1+8L._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          key={Math.random().toString()}
          desc="The Lean Startup: How Constant Innovation Creates Radically Successful
      Businesses Paperback"
          price={51.95}
          stars={2}
          img="https://m.media-amazon.com/images/I/71PwDtCYPaL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="container">
        <Product
          key={Math.random().toString()}
          desc="The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback"
          price={61.95}
          stars={5}
          img="https://images-eu.ssl-images-amazon.com/images/I/41G4tqEphuL._AC_SX368_.jpg"
        />
      </div>
    </ProductsCom>
  );
}

export default Products;

const ProductsCom = styled.div`
  margin-top: -300px;
  width: 100%;
  .container {
    width: 70%;
    height: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
