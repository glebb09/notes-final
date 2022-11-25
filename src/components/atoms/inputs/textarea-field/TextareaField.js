import { useState, useCallback } from 'react';

import s from './TextareaField.module.scss';


const TextareaField = ({
  newClassName,
  ...rest
}) => {


  const classNameContainer = s.container;

  if (newClassName) {
    classNameContainer = `${classNameContainer} ${newClassName}`.trim();
  }

  return (
    <textarea 
      className={classNameContainer}
      {...rest} 
    >
    </textarea>
  )
}

export default TextareaField;