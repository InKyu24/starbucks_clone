import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Menu.module.css';

function Menu() {
    const [menu, setMenu] = useState();

    useEffect(() => {
        fetch("http://localhost:3001/menus")
        .then(res=> res.json())
        .then(data=> {
            setMenu(data);
        })
    }, []);
    return (
        <div className="container">
            <h1>Menu Page</h1>

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
        </div>
    );
}

export default Menu;