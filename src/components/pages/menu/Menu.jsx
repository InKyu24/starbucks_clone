import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menus from '../../../database/menu.json'
import style from './Menu.module.css';

function Menu() {
    return (
        <div className="container">
            <h1>Menu Page</h1>
            <ul className={style.menuList}>
                {
                    menus.menu.map(menu => (
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
        </div>
    );
}

export default Menu;