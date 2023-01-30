import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./ProductDetail.module.css";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const getCartIdAsExistSameProduct = async () => {
    let result = false;
    await fetch(`http://localhost:3001/carts?userId=1&productId=${product.id}`)
      .then((res) => res.json())
      .then((data) => {
        if(data.length !== 0) result={id: data[0].id, qty: data[0].qty}
      });
    return result;
  };

  const handlerAddCart = () => {
    getCartIdAsExistSameProduct().then(result => {
        if(result) {
            fetch(`http://localhost:3001/carts/${result.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  userId: 1,
                  productId: product.id,
                  qty: result.qty + 1
                }),
              })
                .then((res) => {
                  res.json();
                  if (res.ok) {
                    alert(`${product.title}이/가 장바구니에 담겼습니다.`);
                    navigate("/cart");
                  } else {
                    alert("서버 에러");
                  }
                })
                .catch((err) => console.error(err));
        } else {
            fetch("http://localhost:3001/carts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  userId: 1,
                  productId: product.id,
                  qty: 1
                }),
              })
                .then((res) => {
                  res.json();
                  if (res.ok) {
                    alert(`${product.title}이/가 장바구니에 담겼습니다.`);
                    navigate("/cart");
                  } else {
                    alert("서버 에러");
                  }
                })
                .catch((err) => console.error(err));
        }
    });
    
  
  };

  return (
    <div className="container">
      {product && (
        <div key={product.id}>
          <div className={style.productView}>
            <div className={style.productDetail}>
              <h4>
                {product.title}
                <br />
                <span>{product.engTitle}</span>
                <button className={style.btn} onClick={() => navigate(-1)}>
                  뒤로 가기
                </button>
              </h4>
              <p className={style.productInfo}>{product.description}</p>
              <div>
                <p className={style.productInfo}>
                  가격 : {product.price + "원"}
                  <button className={style.btn} onClick={handlerAddCart}>
                    카트에 넣기
                  </button>
                </p>
              </div>
              <div className={style.productImg}>
                <img src={product.image} alt={product.title} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
