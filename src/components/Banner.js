import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <BannerCom>
      <div className="banner">
        <img
          src="https://m.media-amazon.com/images/I/51k08TEpnvL._SX1500_.jpg"
          alt=""
        />
        <div className="shadow" />
      </div>
    </BannerCom>
  );
}

export default Banner;

const BannerCom = styled.div`
  z-index: -1;
  position: relative;
  width: 100%;
  height: 600px;
  padding-top: 78px;
  .banner {
    position: relative;
    > img {
      width: 100%;
      height: 100%;
    }
    .shadow {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 250px;
      background: linear-gradient(to bottom, transparent, #f3f3f3);
    }
  }
`;
