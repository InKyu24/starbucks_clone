import React from 'react';
import { Link } from 'react-router-dom';
import style from './StarButton.module.css';

function StarButton({ title = 'default', size = 'small', color = 'sbGreen', link = '#', handler }) {
    const sizeClass = size === 'big' ? style.big : style.small;
    const colorClass = color === 'sbGreen' ? style.sbGreen : style.sbWhite;

    return (
        <div className={`${style.starBtn} ${sizeClass} ${colorClass}`} onClick={handler}>
            <Link to={link}>{title}</Link>
        </div>
    );
}

export default StarButton;