import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectBasket } from "../store/basketSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { auth } from "../firebase";

function Header() {
  const cart = useSelector(selectBasket);
  const userName = useSelector(selectUser);
  // console.log(userName);
  function userAuthHandler() {
    if (userName) {
      auth.signOut();
    }
  }
  return (
    <HeaderCom>
      <Link to="/">
        <div className="logo">
          <img
            src="https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png"
            alt=""
          />
        </div>
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i class="fas fa-search fa-lg"></i>
      </div>
      <div className="nav">
        <ul>
          <Link to={!userName && "/login"} style={{ textDecoration: "none" }}>
            <li onClick={userAuthHandler}>
              <p className="small">
                Hello {userName ? `${userName.slice(0, 4)}...` : `Guest`}{" "}
              </p>
              <p className="bold">{userName ? `Sign out` : `Sign In`}</p>
            </li>
          </Link>
          <li>
            <p className="small">Returns</p>
            <p className="bold">& Orders</p>
          </li>
          <li>
            <p className="small">Your</p>
            <p className="bold">Prime</p>
          </li>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <li className="cart">
              <span>
                <i class="fas fa-shopping-basket"></i>
              </span>
              <span className="bold">{cart.length}</span>
            </li>
          </Link>
        </ul>
      </div>
    </HeaderCom>
  );
}

export default Header;

const HeaderCom = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 80px;
  background-color: #131921;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 10px;
  .logo {
    width: 150px;
    height: 70%;
    margin: 10px 10px 0;
    > img {
      height: 100%;
      width: 100%;
    }
  }
  .search-bar {
    flex: 1;
    display: flex;
    height: 40px;
    > input {
      height: 100%;
      width: 100%;
      font-size: 20px;
      padding-left: 5px;
      border: none;
      border-radius: 5px 0 0 5px;
      &:focus {
        outline: none;
      }
    }
    > i {
      color: black;
      background-color: #ff9900;
      height: 100%;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 0 5px 5px 0;
    }
  }
  .nav {
    width: 300px;
    margin: 0 10px;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        color: white;
        cursor: pointer;
        .small {
          font-size: 12px;
          font-style: italic;
        }
        .bold {
          font-weight: 600;
        }
      }
      .cart {
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 40px;
      }
    }
  }
`;
