import React from 'react';

function Title({ title = 'Title', detail = 'detail', align, isView = true }) {
  if(!isView) return null;
  return ( 
    <div style={{textAlign: align , margin: '0 16px'}}>
      <h2>{title}</h2>
      <p>{detail}</p>
    </div>
  );
}

export default Title;