import React from 'react';
import style from './MenuList.module.css';
import { Link } from 'react-router-dom';

function MenuList({menu}) {
    return ( 
        <ul className={style.menuList}>
            {
                menu && menu.map(menu => (
                    <li key={menu.id}>
                        <Link to={String(menu.id)}>
                            <img src={menu.thumbnail} alt={menu.title} />
                            <div>
                                {menu.title} - {menu.description}
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
     );
}

export default MenuList;