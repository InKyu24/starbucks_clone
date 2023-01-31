import { computeHeadingLevel } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import MenuList from './MenuList';
import MenuSearchBox from './MenuSearchBox';

function Menu() {
    const [menu, setMenu] = useState([]);
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        if (searchList.length) {
            let url = 'http://localhost:3001/menus?';
            for (let id of searchList) {
                url += `id=${id}&`
            }
            fetch(url)
            .then(res=> res.json())
            .then(data=> {
                setMenu(data);
            })
        } else {
            setMenu([]);
        }
    }, [searchList]);

    return (
        <div className="container">
            <h1>Menu Page</h1>
            <MenuSearchBox searchList={searchList} setSearchList={setSearchList} />
            <MenuList menu={menu} />
        </div>
    );
}

export default Menu;