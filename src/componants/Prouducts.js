import React, { useEffect } from "react";
// import pic from "../img/22.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../rtk/slices/producte-slice";
import { addTocart } from "../rtk/slices/cart-slice";

const Prouducts = () => {
  const products = useSelector((state) => state.Prouducts);
  // console.log(products);

  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchproducts());
  }, []);

  return (
    <div>
      <div className="container">
        <div className="conAll row">
          {products.map((pro) => (
            <div key={pro.id} className="col-4">
              <div className="conofpic">
                <img src={pro.image} alt={pro.id} />
              </div>
              <h3>Price : {pro.price} $</h3>
              <h2>{pro.title}</h2>
              <p>{pro.description}</p>
              <button type="" onClick={() => dispach(addTocart(pro))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prouducts;
