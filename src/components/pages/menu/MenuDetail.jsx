import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../..//../database/products.json';
import menus from '../../../database/menu.json';
import style from './MenuDetail.module.css';

function MenuDetail() {
    const { menuId } = useParams();
    
    return ( 
        <div className="container">
            {
                menus.menu.map(menu => 
                    <h1 key={menu.id}>{menu.id == menuId && menu.title}</h1>
                )
            }
            <ul className={style.productList}>
            {
                products.product.map(product => (
                    product.menuId == menuId && (
                        <li key={product.id}>
                            <Link to={`../detail/${product.id}`}>
                                <img src={product.image} alt={product.title} />
                                <div>
                                    {product.title}
                                </div>
                            </Link>
                        </li>
                    )
                ))
            }
            </ul>
        </div>
    );
}

export default MenuDetail;