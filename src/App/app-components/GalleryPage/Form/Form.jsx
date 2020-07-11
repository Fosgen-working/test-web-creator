import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Markup } from 'interweave';
import dynamicAttributes from '../../../app-functions/dynamicAttributes';
import './Form.scss';

const Form = (props) => {
  debugger

  let titlesFields = {};
  props.formData.fields.forEach(item => {
    let objectElement = item.name;
    titlesFields[objectElement] = React.createRef();
  });

  let attributeMain = props.formData.field_groups.main.substr(4, 2);
  let sizeMain = (props.formData.field_groups.main.length > 8 ? props.formData.field_groups.main.substr(-2, 2) : props.formData.field_groups.main.substr(-1, 1));
  let attributeAdditional = props.formData.field_groups.additional.substr(4, 2);
  let sizeAdditional = (props.formData.field_groups.additional.length > 8 ? props.formData.field_groups.additional.substr(-2, 2) : props.formData.field_groups.additional.substr(-1, 1));

  let fieldsMain = props.formData.fields.map(field => {

    if (field.group === 'main') {
      if (field.type === 'textarea') {
        return (
          <Col {...dynamicAttributes(attributeMain, 6)}>
            <label for='field.id'>{field.label}</label>
            <textarea id='field.id' name={field.name} className='textarea-form' required={field.required}></textarea>
          </Col>
        );
      }
      else {
        return (
          <Col {...dynamicAttributes(attributeMain, 6)}>
            <label for='field.id'>{field.label}</label>
            <input onChange={() => { props.updateTitles(titlesFields[field.name].current.value, field.name) }} ref={titlesFields[field.name]} value={props.fieldsData[field.name].value} id='field.id' name={field.name} type={field.type} className='input-form' required={field.required} />
          </Col>
        );
      }
    }

  });
  debugger

  let fieldsAdditional = props.formData.fields.map(field => {
    if (field.group === 'additional') {
      if (field.type === 'textarea') {
        return (
          <div>
            <label for={field.id}>{field.label}</label>
            <textarea id={field.id} name={field.name} className='textarea-form' required={field.required}></textarea>
          </div>
        );
      }
      else {
        return (
          <div>
            <label for={field.id}>{field.label}</label>
            <input id={field.id} name={field.name} type={field.type} className='input-form' required={field.required} />
          </div>
        );
      }
    }

  });

  let agreement = props.formData.fields.find(item => item.name === 'agreement');

  return (
    <div className='Form'>
      <h3>{props.formData.title}</h3>
      <Row>
        <Col {...dynamicAttributes(attributeMain, sizeMain)}>
          <Row>
            {fieldsMain}
          </Row>
        </Col>
        <Col {...dynamicAttributes(attributeAdditional, sizeAdditional)}>
          {fieldsAdditional}
        </Col>
      </Row>
      <div className='agreement'>
        <input id='agreement' type={agreement.type} name={agreement.name} />
        <label for='agreement'><Markup content={agreement.label} /></label>
      </div>
      <button className='submit-button'>{props.formData.submit_button.text}</button>
    </div>
  );
}

export default Form;