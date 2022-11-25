
import s from './Button.module.scss';

const Button = ({
  children,
  newClassName,
  mType,
  size,
  onClick,
  ...rest
}) => {

  let buttonClass = s.button;

  return (
    <button 
      className={buttonClass} 
      data-size={size} 
      data-type={mType}
      onClick={onClick} 
      {...rest}
    >
        {children}
    </button>
  )
}

export default Button;