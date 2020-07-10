import React from 'react';
import './Texts.scss';


const Texts = (props) => {

  let blocks = props.textsData.metadata.components.map(block => {

    let size = (block.col.substr(0, 2) + '=' + block.col.substr(-1, 1))
    debugger
    return < col></col >;
  });

  return (
    <div className='Texts'>
      {blocks}
    </div>
  );
}

export default Texts;
