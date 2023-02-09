import React from 'react';
import style from './MainBanner.module.css';
import { mainBanner } from '../../../data/mainBanner';
import StarButton from '../../ui/StarButton';

function MainBanner() {

    return ( 
        <section id="mainBanner">
            <div className={style.bannerWrap} style={{backgroundImage: `url("${mainBanner && mainBanner.backgroundImg}")`}}>
                <img src={mainBanner.titleImg} alt={mainBanner.description} />
                {
                    mainBanner.menus.map(menu => (
                        <img src={menu.imgUrl} alt={menu.titleKor} key={menu.id} />
                    ))
                }
                <StarButton
                    title={mainBanner.button.title}
                    size=''
                    color='sbGreen'
                    link={mainBanner.button.link}
                />
            </div>
        </section>
     );
}

export default MainBanner;