import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import CartList from "./CartList";

function Cart() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/carts?userId=1`)
      .then((res) => res.json())
      .then((data) => {
        setCartList(data);
      });
  }, []);

  return (
    <div className="container">
      {cartList.length !== 0 ? (
        cartList.map((cartData) => (
          <CartList key={cartData.id} cartData={cartData} />
        ))
      ) : (
        <>장바구니에 물건이 없습니다.</>
      )}
    </div>
  );
}

export default Cart;
