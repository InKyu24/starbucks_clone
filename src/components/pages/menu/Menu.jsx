import React, { useState, useEffect } from 'react';
import MenuList from './MenuList';
import MenuSearchBox from './MenuSearchBox';

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
            <MenuSearchBox />
            <MenuList menu={menu} />
        </div>
    );
}

export default Menu;