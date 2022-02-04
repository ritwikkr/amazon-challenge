import styled from "styled-components";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutScreen from "./pages/CheckoutScreen";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { auth, onAuthStateChanged } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./store/userSlice";
import PaymentScreen from "./pages/PaymentScreen";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ user: user.email }));
      } else {
        dispatch(setUser({ user: null }));
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <AppCom>
        <Routes>
          <Route path="/checkout/payment" element={<PaymentScreen />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </AppCom>
    </Router>
  );
}

export default App;

const AppCom = styled.div``;
