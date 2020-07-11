import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Markup } from 'interweave';
import dynamicAttributes from '../../../app-functions/dynamicAttributes';
import './Texts.scss';


const Texts = (props) => {

  let blocks = props.textsData.metadata.components.map(block => {
    let attribute = block.col.substr(0, 2);
    let size = (block.col.length > 4 ? block.col.substr(-2, 2) : block.col.substr(-1, 1));
    return <Col {...dynamicAttributes(attribute, size)}><h3>{block.metadata.title}</h3><Markup content={block.metadata.text} /></Col>;
  });

  return (
    <div className='Texts'>
      <Row>
        {blocks}
      </Row>
    </div>
  );
}

export default Texts;
