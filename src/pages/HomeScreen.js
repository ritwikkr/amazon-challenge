import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Products from "../components/Products";

function HomeScreen() {
  return (
    <HomeScreenCom>
      <Header />
      <Banner />
      <Products />
    </HomeScreenCom>
  );
}

export default HomeScreen;

const HomeScreenCom = styled.div``;
