import React, { useState } from 'react';
import style from './MenuSearchBox.module.css';
import MenuCategoryList from './MenuCategoryList';

function MenuSearchBox({searchList, setSearchList}) {
  const [isOpen, setIsOpen] = useState(true);

  const searchShow = isOpen === false && style.displayNone;
  return (
    <>
      <div className={style.searchWrap}>
        <p>분류보기</p>
        <div className={style.searchToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?
            <img src="https://image.istarbucks.co.kr/common/img/menu/list_up_btn.png" alt="up" />
            :
            <img src="https://image.istarbucks.co.kr/common/img/menu/list_down_btn.png" alt="down" />
          }
        </div>
        <div className={`${style.searchBody} ${searchShow}`}>
          <dl>
            <dt className={style.category}>카테고리</dt>
            <dd>
              <MenuCategoryList searchList={searchList} setSearchList={setSearchList} />
            </dd>
            <dt className={style.theme}>테마</dt>
            <dd style={{ display: 'none' }}>
              테마 리스트
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}

export default MenuSearchBox;