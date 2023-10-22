import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navcard = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="navb">
      <Link to="/">CardApp</Link>
      <Link to="/">Prouducts</Link>
      <Link to="/card">card {cart.length === 0 ? "" : cart.length}</Link>
    </div>
  );
};

export default Navcard;
