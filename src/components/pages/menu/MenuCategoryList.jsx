import React, { useState, useEffect } from 'react';
import { menuCategory } from '../../../data/menuCategory';
import style from './MenuCategoryList.module.css';

function MenuCategoryList({ searchList, setSearchList }) {
    const [isAllChecked, setIsAllChecked] = useState(false);

    const handleCheck = (e) => {
        if (e.target.checked) {
            e.target.checked = true;
            setSearchList([...searchList, Number(e.target.value)])
        } else {
            e.target.checked = false;
            setSearchList(searchList.filter(item => item !== Number(e.target.value)))
        }
    }

    const handleAllCheck = () => {
        setSearchList([]);
        setIsAllChecked(false);
        if(!isAllChecked) {
            let searchArr = [];
            for(let i of menuCategory) {
                searchArr.push(i.id);
            }
            setSearchList(searchArr);
            setIsAllChecked(true);
        }
    }

    return ( 
        <div>
            <form>
                <ul className={style.categoryList}>
                    <div className={style.scrollBox}>
                        <div className={style.categoryContainer}>
                            <li>
                                <input type="checkbox" id="product_all" onChange={handleAllCheck} />
                                <label htmlFor="product_all">전체 상품보기</label>
                            </li>
                            {
                                menuCategory.map(item => 
                                    <li key={item.id}>
                                        <input type="checkbox" value={item.id} id={item.id} onChange={handleCheck} />
                                        <label htmlFor={item.id}>{item.title}</label>
                                    </li>
                                )
                            }
                        </div>
                    </div>
                </ul>
            </form>
        </div>
     );
}

export default MenuCategoryList;