import React, { useState } from 'react';
import { menuCategory } from '../../../data/menuCategory';
import style from './MenuCategoryList.module.css';

function MenuCategoryList() {
    const [searchList, setSearchList] = useState([]);

    const handleCheck = (e) => {
        console.log(e.target.value, e.target.checked);
    }

    return ( 
        <div>
            <form>
                <ul className={style.categoryList}>
                    <div className={style.scrollBox}>
                        <div className={style.categoryContainer}>
                            <li>
                                <input type="checkbox" id="product_all" />
                                <label htmlFor="product_all">전체 상품보기</label>
                            </li>
                            {
                                menuCategory.map(item => (
                                    <li key={item.id}>
                                        <input type="checkbox" value={item.id} id={item.id} onChange={handleCheck} />
                                        <label htmlFor={item.id}>{item.title}</label>
                                    </li>
                                ))
                            }
                        </div>
                    </div>
                </ul>
            </form>
        </div>
     );
}

export default MenuCategoryList;