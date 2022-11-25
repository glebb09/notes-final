
import s from './InputField.module.scss';

const InputField = ({
  label,
  type,
  newClassNameInput,
  newClassNameLabel
}) => {

  const classNameInput = s.containerInput;
  const classNameLabel = s.containerLabel;
  
  if ( newClassNameInput ) {
    classNameInput = `${classNameInput} ${newClassNameInput}`.trim();
  }

  if ( newClassNameLabel ) {
    classNameLabel = `${classNameLabel} ${newClassNameLabel}`.trim();
  }

  if (label) {

    const labelId = `${label} id`.trim();
    const labelFirstCharUp = label[0].toUpperCase() + label.slice(1); 

    return (
      <label className={classNameLabel} for={labelId}>
        {labelFirstCharUp}
        <input className={classNameInput} type={type} id={labelId}/>
      </label>
    )
  }

  return (
    <input className={classNameInput} type={type} />
  )
    
}

export default InputField;