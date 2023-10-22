import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

const Card = () => {
  const cartArr = useSelector((state) => state.cart);

  const dispach = useDispatch();

  const totalPrice = cartArr.reduce((acc, pro) => {
    acc += pro.price;
    return acc;
  }, 0);

  return (
    <div className="container">
      <h1> Welcome to Cart</h1>
      <button className="btnStyle" onClick={() => dispach(clear())}>
        Clear
      </button>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Price</th>
            <th scope="col">img</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartArr.map((pro) => (
            <tr key={pro.id}>
              <th scope="row">{pro.id}</th>
              <td>{pro.title}</td>
              <td>
                <h5>{pro.price} $</h5>
              </td>
              <td>
                <img src={pro.image} alt={pro.id} style={{ height: "50px" }} />
              </td>
              <td>
                <button
                  className="btnStyle"
                  onClick={() => dispach(deleteFromCart(pro))}
                >
                  DELTE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ paddingTop: "5px", paddingBottom: "100px" }}>
        <h4 style={{ display: "inline" }}>
          Total Price = {totalPrice.toFixed(2)}
        </h4>
      </div>
    </div>
  );
};

export default Card;
