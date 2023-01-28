import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../../../database/products.json';
import style from './ProductDetail.module.css';

function ProductDetail() {
    const { productId } = useParams();
    const navigate = useNavigate();

    return (
        <div className="container">
            {
                products.product.map(product =>
                    product.id == productId &&
                        <div key={product.id}>            
                            <div className={style.productView}>
                                <div className={style.productDetail}>
                                    <h4>
                                        {product.title}<br/>
                                        <span>{product.engTitle}</span>
                                        <button className={style.btn} onClick={()=>navigate(-1)}>뒤로 가기</button>
                                    </h4>
                                    <p className={style.productInfo}>{product.description}</p>
                                    <div>
                                        <p className={style.productInfo}>
                                            가격 : {product.price + "원"}
                                            <button
                                                className={style.btn}
                                                onClick={()=> {
                                                    alert(`"${product.title}" 을/를 장바구니에 담습니다.`)
                                                }}
                                            >
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
                )
            }
        </div>
    );
}

export default ProductDetail;