
import s from './FieldContent.module.scss';

const FieldContent = ({
  lengthNote,
  children
}) => {

  console.log("length", lengthNote);

  return (
    <div className={[
      s.container,
      lengthNote >= 2 ? s.justNote : '',
      lengthNote >= 3 ? s.aligNote : '',

    ].join(" ")}>
      {children}
    </div>
  )
}

export default FieldContent;