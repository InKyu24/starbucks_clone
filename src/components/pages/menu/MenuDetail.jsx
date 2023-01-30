import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './MenuDetail.module.css';

function MenuDetail() {
    const { menuId } = useParams();
    
    const [menu, setMenu] = useState();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/menus/${menuId}`)
            .then(res => res.json())
            .then(data => {
                setMenu(data);
            })

        fetch(`http://localhost:3001/products`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, []);

    return ( 
        <div className="container">
            {
                menu && 
                    <h1 key={menu.id}>{menu.title}</h1>
            }
            <ul className={style.productList}>
                {
                    product && product.map(product => (
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