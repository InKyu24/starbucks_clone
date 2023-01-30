import React, { useState, useEffect } from "react";
import style from "./CartList.module.css";

function CartList({ cartData }) {
  const [cartObj, setCartObj] = useState({
    id: cartData.id,
    userId: cartData.userId,
    qty: cartData.qty,
    title: "",
    engTitle: "",
    description: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3001/products/${cartData.productId}`)
      .then((res) => res.json())
      .then((data) => {
        setCartObj({
          ...cartObj,
          title: data.title,
          engTitle: data.engTitle,
          description: data.description,
          price: data.price,
          image: data.image,
        });
      });
  }, [cartData]);

  const increaseQty = () => {
    setCartObj({
        ...cartObj,
        qty : cartObj.qty + 1
    })
  }

  const decreaseQty = () => {
    setCartObj({
        ...cartObj,
        qty : cartObj.qty - 1
    })
  }

  return (
    <ul>
      <li>
        <div className={style.productInfo}>
            <div className={style.leftBox}>
                <img src={cartObj.image} alt="상품 이미지" />
            </div>
            <div className={style.rightBox}>
                <div className={style.engTitle}>{cartObj.engTitle}</div>
                <div className={style.title}>{cartObj.title}</div>
                <div className={style.description}>{cartObj.description}</div>
            </div>
        </div>
        <div className={style.productPrice}>
            <div className={style.count}>
                <button onClick={increaseQty}> + </button>
                <span> {'수량 : ' + cartObj.qty} ({'₩ ' + (cartObj.price * cartObj.qty).toLocaleString('ko-KR')}) </span>
                <button onClick={decreaseQty}> - </button>
            </div>
            <div className={style.price}>
                   
            </div>
        </div>
      </li>
    </ul>
  );
}

export default CartList;
