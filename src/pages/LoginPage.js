import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../firebase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function registerUserHandler() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  function formSubmitHandler(e) {
    e.preventDefault();
  }
  async function signInUserHandler() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <LoginPageCom>
      <div className="logInBox">
        <Link to="/">
          <img
            src="https://www.citypng.com/public/uploads/preview/-11596307623br3hlq9vjt.png"
            alt=""
            className="logo"
          />
        </Link>
        <div className="signInBox">
          <h1>Sign in</h1>
          <form onSubmit={formSubmitHandler}>
            <div className="form-component">
              <label htmlFor="email">
                <small>E-mail</small>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-component">
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-component">
              <button className="signInBtn" onClick={signInUserHandler}>
                Sign In
              </button>
            </div>
            <p>Lorem ipsum ada adwidef adawla fnsesen</p>
            <div className="form-component">
              <button onClick={registerUserHandler}>
                Create your own account
              </button>
            </div>
          </form>
        </div>
      </div>
    </LoginPageCom>
  );
}

export default LoginPage;

const LoginPageCom = styled.div`
  position: relative;
  .logInBox {
    width: 350px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      width: 150px;
    }
    .signInBox {
      border: 1px solid gray;
      border-radius: 3px;
      padding: 10px;
      margin-top: 20px;
      form {
        margin-top: 10px;
        .form-component {
          display: flex;
          flex-direction: column;
          margin: 10px 0;
          .signInBtn {
            background-color: #ff9900;
            border: none;
            border-radius: 2px;
            padding: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
